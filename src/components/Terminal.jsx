import { useCallback, useEffect, useRef, useState } from 'react';
import { CONTACT, PROFILE, PROJECTS, SKILL_GROUPS, SOCIALS } from '../data';

const PROMPT = 'visitor@abrshiz:~$';

const BANNER = ['▄▀█ █▄▄ █▀█ █▀ █ █ █ ▀█', '█▀█ █▄█ █▀▄ ▄█ █▀█ █ █▄'];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let lineId = 0;
const line = (text = '', kind = 'out', extra = {}) => ({ id: ++lineId, text, kind, ...extra });

const pad = (value, width) => value.padEnd(width, ' ');

const COMMAND_LIST = [
  ['help', 'Show this list of commands'],
  ['whoami', 'Identity and current status'],
  ['about', 'A longer introduction'],
  ['skills', 'Languages, frameworks and tools'],
  ['projects', 'List every project with an index'],
  ['open <n>', 'Open project <n> on GitHub'],
  ['contact', 'Email, phone, location, timezone'],
  ['socials', 'Links to my profiles'],
  ['resume', 'Download my CV as PDF'],
  ['goto <page>', 'Scroll to about | skills | work | contact'],
  ['banner', 'Print the banner again'],
  ['clear', 'Clear the screen'],
];

const COMMAND_NAMES = ['help', 'whoami', 'about', 'skills', 'projects', 'open', 'contact', 'socials', 'resume', 'goto', 'banner', 'clear', 'ls', 'date', 'sudo'];

function bannerLines() {
  return [
    ...BANNER.map((text) => line(text, 'banner')),
    line(),
    line(PROFILE.name, 'accent'),
    line(`${PROFILE.role} · ${PROFILE.location} · ${PROFILE.timezone}`, 'dim'),
    line(`● ${PROFILE.status}`, 'ok'),
    line(),
    line("Type 'help' to see what this terminal can do.", 'dim'),
  ];
}

function runCommand(raw, helpers) {
  const [name, ...args] = raw.trim().split(/\s+/);
  const command = name.toLowerCase();

  switch (command) {
    case 'help':
      return [
        line('Available commands', 'accent'),
        line(),
        ...COMMAND_LIST.map(([cmd, desc]) => line(`  ${pad(cmd, 14)}${desc}`)),
        line(),
        line('Tip: press Tab to autocomplete, ↑ / ↓ to reuse history.', 'dim'),
      ];

    case 'whoami':
      return [
        line(PROFILE.name, 'accent'),
        line(`${PROFILE.role} · @${PROFILE.handle}`),
        line(`${PROFILE.location} · ${PROFILE.timezone}`, 'dim'),
        line(),
        line(`● ${PROFILE.status}`, 'ok'),
      ];

    case 'about':
      return [line(PROFILE.summary), line(), ...PROFILE.bio.flatMap((text) => [line(text), line()])].slice(0, -1);

    case 'skills':
      return SKILL_GROUPS.flatMap((group) => [
        line(group.title, 'accent'),
        line(`  ${group.items.map((item) => item.name).join('  ·  ')}`),
        line(),
      ]).slice(0, -1);

    case 'projects':
      return [
        line(`${PROJECTS.length} repositories`, 'accent'),
        line(),
        ...PROJECTS.map((project, index) =>
          line(`  [${pad(String(index + 1), 2)}] ${pad(project.name, 30)}${project.tags.join(', ')}`)
        ),
        line(),
        line("Run 'open <n>' to view one on GitHub.", 'dim'),
      ];

    case 'open': {
      const index = Number.parseInt(args[0], 10);
      const project = PROJECTS[index - 1];
      if (!project) {
        return [line(`open: no project at index '${args[0] ?? ''}'. Run 'projects' for the list.`, 'err')];
      }
      helpers.openUrl(`https://github.com/${project.repo}`);
      return [line(`Opening ${project.name} → github.com/${project.repo}`, 'ok')];
    }

    case 'contact':
      return CONTACT.map((item) => line(`  ${pad(item.label, 10)}${item.value}`));

    case 'socials':
      return SOCIALS.map((social) =>
        line(`  ${pad(social.label, 10)}${social.handle}`, 'link', { href: social.href })
      );

    case 'resume':
      helpers.openUrl(PROFILE.resume);
      return [line('Opening AbrhamWendesenTadesseCV.pdf in a new tab…', 'ok')];

    case 'goto': {
      const target = (args[0] || '').toLowerCase();
      if (!helpers.scrollTo(target)) {
        return [line(`goto: unknown page '${target}'. Try about, skills, work or contact.`, 'err')];
      }
      return [line(`Navigating to /${target}`, 'ok')];
    }

    case 'banner':
      return bannerLines();

    case 'ls':
      return [line('  about/      skills/      work/      contact/      resume.pdf')];

    case 'date':
      return [line(new Date().toString())];

    case 'sudo':
      return [line('Nice try. Permission denied — but I respect the ambition.', 'err')];

    case 'clear':
      return 'clear';

    case '':
      return [];

    default:
      return [line(`command not found: ${command}. Type 'help' for the list.`, 'err')];
  }
}

export default function Terminal() {
  const [lines, setLines] = useState([]);
  const [input, setInput] = useState('');
  const [booting, setBooting] = useState(true);
  const [ghostCommand, setGhostCommand] = useState('');
  const [focused, setFocused] = useState(false);

  const bodyRef = useRef(null);
  const inputRef = useRef(null);
  const frameRef = useRef(null);
  const history = useRef([]);
  const historyIndex = useRef(-1);

  const setTilt = useCallback((rx, ry, mx, my) => {
    const frame = frameRef.current;
    if (!frame) return;
    frame.style.setProperty('--rx', `${rx}deg`);
    frame.style.setProperty('--ry', `${ry}deg`);
    frame.style.setProperty('--lift', mx === undefined ? '0' : '1');
    if (mx !== undefined) frame.style.setProperty('--mx', `${mx}%`);
    if (my !== undefined) frame.style.setProperty('--my', `${my}%`);
  }, []);

  const handleTilt = (event) => {
    if (focused || reducedMotion() || window.matchMedia('(hover: none)').matches) return;
    const frame = frameRef.current;
    if (!frame) return;
    const rect = frame.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt((-y * 12).toFixed(2), (x * 14).toFixed(2), ((x + 0.5) * 100).toFixed(1), ((y + 0.5) * 100).toFixed(1));
  };

  useEffect(() => {
    if (focused) setTilt(7, -10);
  }, [focused, setTilt]);

  const openUrl = useCallback((url) => window.open(url, '_blank', 'noopener,noreferrer'), []);

  const scrollToSection = useCallback((id) => {
    const target = document.getElementById(id);
    if (!target) return false;
    target.scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth' });
    return true;
  }, []);

  useEffect(() => {
    let cancelled = false;
    const quick = reducedMotion();
    const push = (entries) => {
      if (!cancelled) setLines((prev) => [...prev, ...entries]);
    };

    const boot = async () => {
      setLines([]);
      push([line(`Last login: ${new Date().toDateString()} on ttys001`, 'dim')]);
      await sleep(quick ? 0 : 420);
      if (cancelled) return;

      const demo = 'whoami';
      if (!quick) {
        for (let i = 1; i <= demo.length; i += 1) {
          if (cancelled) return;
          setGhostCommand(demo.slice(0, i));
          await sleep(85);
        }
        await sleep(260);
      }
      if (cancelled) return;
      setGhostCommand('');
      push([line(demo, 'cmd')]);
      await sleep(quick ? 0 : 180);
      if (cancelled) return;

      push(bannerLines());
      if (!cancelled) setBooting(false);
    };

    boot();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const body = bodyRef.current;
    if (body) body.scrollTop = body.scrollHeight;
  }, [lines, ghostCommand]);

  const submit = (value) => {
    const entries = [line(value, 'cmd')];
    const result = runCommand(value, { openUrl, scrollTo: scrollToSection });

    if (result === 'clear') {
      setLines([]);
    } else if (result.length === 0) {
      setLines((prev) => [...prev, ...entries]);
    } else {
      setLines((prev) => [...prev, ...entries, ...result, line()]);
    }

    if (value.trim()) {
      history.current = [value, ...history.current].slice(0, 40);
    }
    historyIndex.current = -1;
    setInput('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      submit(input);
      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      const next = Math.min(historyIndex.current + 1, history.current.length - 1);
      if (next >= 0) {
        historyIndex.current = next;
        setInput(history.current[next]);
      }
      return;
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      const next = historyIndex.current - 1;
      historyIndex.current = Math.max(next, -1);
      setInput(next >= 0 ? history.current[next] : '');
      return;
    }

    if (event.key === 'Tab') {
      event.preventDefault();
      const match = COMMAND_NAMES.find((name) => name.startsWith(input.trim().toLowerCase()));
      if (input.trim() && match) setInput(match);
      return;
    }

    if (event.key === 'l' && event.ctrlKey) {
      event.preventDefault();
      setLines([]);
    }
  };

  const focusInput = () => inputRef.current?.focus();

  return (
    <div
      className="terminal-frame"
      ref={frameRef}
      style={{ '--rx': '7deg', '--ry': '-10deg' }}
      onPointerMove={handleTilt}
      onPointerLeave={() => setTilt(7, -10)}
    >
      <div className="terminal" onClick={focusInput}>
        <div className="terminal-bar">
          <span className="terminal-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="terminal-title mono">{PROFILE.handle}@portfolio — zsh</span>
          <span className="terminal-badge mono" aria-hidden="true">
            interactive
          </span>
        </div>

        <div
          className="terminal-body"
          ref={bodyRef}
          role="log"
          aria-live="polite"
          aria-label="Portfolio terminal output"
        >
          {lines.map((entry) => {
            if (entry.kind === 'cmd') {
              return (
                <p className="term-line" key={entry.id}>
                  <span className="term-prompt">{PROMPT}</span> {entry.text}
                </p>
              );
            }
            if (entry.kind === 'link') {
              return (
                <p className="term-line term-link" key={entry.id}>
                  <a href={entry.href} target="_blank" rel="noreferrer">
                    {entry.text}
                  </a>
                </p>
              );
            }
            return (
              <p className={`term-line term-${entry.kind}`} key={entry.id}>
                {entry.text || '\u00a0'}
              </p>
            );
          })}

          {booting && ghostCommand && (
            <p className="term-line">
              <span className="term-prompt">{PROMPT}</span> {ghostCommand}
              <span className="term-caret is-on" />
            </p>
          )}

          {!booting && (
            <label className="term-entry">
              <span className="term-prompt">{PROMPT}</span>
              <span className="term-value">
                {input}
                <span className={`term-caret ${focused ? 'is-on' : ''}`} />
              </span>
              <input
                ref={inputRef}
                className="term-field"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                aria-label="Terminal command input"
                autoComplete="off"
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck="false"
              />
            </label>
          )}
        </div>

        <span className="glare" aria-hidden="true" />
      </div>
    </div>
  );
}
