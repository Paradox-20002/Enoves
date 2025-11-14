## Goal
- Replace CSS hover-triggered mega menu with a JS-controlled dropdown that opens/closes on click while preserving the current UI style and all other functionality.

## Key Changes (Desktop only)
1. Control visibility via state/class:
- Use existing `isMegaOpen` and `.has-mega.is-open` class to show/hide the mega menu.
- Remove hover/focus CSS rules; show when `.has-mega.is-open` is present.

2. Toggle via caret click (keep Services link navigation):
- Keep `Services` link (`href="/services"`) navigation unchanged.
- Make the caret clickable to toggle `isMegaOpen`; add keyboard support (Enter/Space) and `aria-expanded`.

3. Close behavior
- Keep `onBlur` on the mega menu container to close when focus leaves.
- Close on menu item click using existing `onClose` prop.
- Support Esc key to close.

## Files to Update
### app/components/mega-menu/mega-menu.css
- Remove `.has-mega:hover .mega-menu, .has-mega:focus-within .mega-menu` visibility rules.
- Add `.has-mega.is-open .mega-menu { opacity: 1; pointer-events: auto; transform: translateX(-50%) translateY(3px); }` to preserve the same visual open state.

### app/components/header/DesktopNav.jsx
- Remove `onMouseEnter`, `onMouseLeave`, `onFocusCapture` handlers from the `li.nav-item.has-mega`.
- Keep `onBlur={onMegaLeave}` on the container for closing.
- Make the caret `<span className="caret">` interactive:
  - Add `onClick={onToggleMega}`, `tabIndex={0}`, `onKeyDown` to handle Enter/Space.
  - Add `aria-controls="mega-menu"`, `aria-expanded={isMegaOpen}`.
- Keep Services anchor navigation unchanged.

### app/components/header/header.jsx
- Add `toggleMegaMenu` (set `isMegaOpen` to `!prev`).
- Pass `onToggleMega={toggleMegaMenu}` to `DesktopNav`.
- Keep `closeMegaMenu` and existing mobile/header behaviors unchanged.

### app/components/mega-menu/mega-menu.jsx
- Add `id="mega-menu"` on the root element for `aria-controls` to reference.
- No visual/style changes.

## Accessibility
- `aria-haspopup="true"` stays on the container.
- Toggler uses `aria-expanded` reflecting state.
- Keyboard: caret is focusable (tabIndex), supports Enter/Space; Escape closes the menu.

## Verification
- Confirm desktop: hover no longer opens; caret click opens with identical styles; Services link still navigates.
- Confirm mobile nav unchanged.
- Test Esc and outside blur closes.

## Rollback Safety
- If needed, re-enable `:hover` visibility by restoring the removed CSS selector; JS state remains compatible.

Do you want me to implement these changes now?