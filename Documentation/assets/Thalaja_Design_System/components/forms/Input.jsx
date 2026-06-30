import React from 'react';

/**
 * Thalaja Input — text field with optional leading/trailing adornments.
 */
export function Input({
  value,
  onChange,
  placeholder,
  label,
  hint,
  error,
  iconLeft,
  iconRight,
  type = 'text',
  disabled = false,
  dir,
  style = {},
  inputStyle = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const borderColor = error
    ? 'var(--red)'
    : focused
      ? 'var(--indigo)'
      : 'var(--border-soft)';

  return (
    <label style={{ display: 'block', ...style }}>
      {label ? (
        <span style={{
          display: 'block', marginBottom: 6, fontFamily: 'var(--font-body)',
          fontWeight: 'var(--fw-bold)', fontSize: 'var(--fs-body-sm)', color: 'var(--text-strong)',
        }}>{label}</span>
      ) : null}
      <span style={{
        display: 'flex', alignItems: 'center', gap: 10,
        height: 'var(--control-h-md)', padding: '0 16px',
        background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
        border: `2px solid ${borderColor}`,
        borderRadius: 'var(--radius-md)',
        boxShadow: focused ? '0 0 0 4px var(--indigo-tint)' : 'none',
        transition: 'border-color .15s ease, box-shadow .15s ease',
        opacity: disabled ? 0.6 : 1,
      }}>
        {iconLeft ? <span style={{ display: 'inline-flex', color: 'var(--text-muted)', flex: 'none' }}>{iconLeft}</span> : null}
        <input
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          disabled={disabled}
          dir={dir}
          onFocus={(e) => { setFocused(true); rest.onFocus && rest.onFocus(e); }}
          onBlur={(e) => { setFocused(false); rest.onBlur && rest.onBlur(e); }}
          style={{
            flex: 1, minWidth: 0, border: 'none', outline: 'none', background: 'transparent',
            fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body)', fontWeight: 'var(--fw-medium)',
            color: 'var(--text-body)', ...inputStyle,
          }}
          {...rest}
        />
        {iconRight ? <span style={{ display: 'inline-flex', color: 'var(--text-muted)', flex: 'none' }}>{iconRight}</span> : null}
      </span>
      {error ? (
        <span style={{ display: 'block', marginTop: 6, fontSize: 'var(--fs-caption)', color: 'var(--red-press)', fontWeight: 'var(--fw-medium)' }}>{error}</span>
      ) : hint ? (
        <span style={{ display: 'block', marginTop: 6, fontSize: 'var(--fs-caption)', color: 'var(--text-muted)' }}>{hint}</span>
      ) : null}
    </label>
  );
}
