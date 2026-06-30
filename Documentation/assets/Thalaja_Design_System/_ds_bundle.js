/* @ds-bundle: {"format":3,"namespace":"ThalajaDesignSystem_ed2185","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"AvatarGroup","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"QtyStepper","sourcePath":"components/forms/QtyStepper.jsx"},{"name":"SegmentedControl","sourcePath":"components/forms/SegmentedControl.jsx"},{"name":"Blob","sourcePath":"components/patterns/Blob.jsx"},{"name":"CategoryChip","sourcePath":"components/patterns/CategoryChip.jsx"},{"name":"GroceryItem","sourcePath":"components/patterns/GroceryItem.jsx"},{"name":"ListSummaryCard","sourcePath":"components/patterns/ListSummaryCard.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"ed21cc7203bc","components/core/Badge.jsx":"ea0182a55999","components/core/Button.jsx":"5661164dee72","components/core/Card.jsx":"d7f8970d005e","components/core/IconButton.jsx":"979428e9de23","components/forms/Checkbox.jsx":"354fcbb9257e","components/forms/Input.jsx":"cbfbcbdadd8c","components/forms/QtyStepper.jsx":"4d80f6fb2269","components/forms/SegmentedControl.jsx":"7f7d91e9f9e6","components/patterns/Blob.jsx":"023efb34ff1b","components/patterns/CategoryChip.jsx":"a32080a8d978","components/patterns/GroceryItem.jsx":"b991c03a7f3a","components/patterns/ListSummaryCard.jsx":"edb4bdb7cd63","ui_kits/thalaja-app/app.jsx":"8b315e612c4d","ui_kits/thalaja-app/icons.jsx":"ff0e15acea7c","ui_kits/thalaja-app/ui.jsx":"4479cebf292e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ThalajaDesignSystem_ed2185 = window.ThalajaDesignSystem_ed2185 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BLOB_PATH = "M 123.7 22.3 Q 110.0 10.0 123.7 22.3 Q 137.4 34.6 154.9 35.1 Q 172.4 35.7 175.7 52.9 Q 179.1 70.1 194.1 81.3 Q 209.1 92.5 196.7 107.8 Q 184.2 123.1 191.6 142.3 Q 199.1 161.4 179.2 165.1 Q 159.4 168.9 151.6 185.8 Q 143.8 202.7 126.9 196.8 Q 110.0 190.9 93.3 196.2 Q 76.7 201.6 68.1 185.9 Q 59.5 170.1 40.7 165.5 Q 21.8 160.9 29.0 142.0 Q 36.1 123.0 22.8 107.6 Q 9.4 92.3 25.9 81.6 Q 42.3 70.9 44.8 53.1 Q 47.2 35.2 64.8 34.6 Q 82.3 33.9 96.2 22.0 Z";
const FILLS = ['var(--red)', 'var(--indigo)', 'var(--mint)', 'var(--lilac-deep)'];
const INK = {
  'var(--red)': 'var(--cream)',
  'var(--indigo)': 'var(--cream)',
  'var(--mint)': 'var(--navy)',
  'var(--lilac-deep)': 'var(--navy)'
};

/**
 * Thalaja Avatar — person/household identity.
 * `shape="blob"` uses the brand starburst sticker; `circle` is a plain round avatar.
 */
function Avatar({
  name = '',
  src,
  size = 44,
  shape = 'circle',
  // 'circle' | 'blob'
  colorIndex,
  // override auto color (0-3)
  style = {},
  ...rest
}) {
  const initials = name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  const idx = colorIndex != null ? colorIndex % FILLS.length : [...name].reduce((a, c) => a + c.charCodeAt(0), 0) % FILLS.length;
  const fill = FILLS[idx];
  const ink = INK[fill];
  const fontSize = Math.round(size * 0.4);
  if (shape === 'blob') {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        position: 'relative',
        display: 'inline-grid',
        placeItems: 'center',
        width: size,
        height: size,
        flex: 'none',
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 220 220",
      width: size,
      height: size,
      style: {
        position: 'absolute',
        inset: 0,
        color: fill
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: BLOB_PATH,
      fill: "currentColor",
      stroke: "var(--cream)",
      strokeWidth: "8"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'relative',
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--fw-bold)',
        fontSize,
        color: ink
      }
    }, initials));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      flex: 'none',
      borderRadius: 'var(--radius-pill)',
      background: src ? 'var(--surface-sunken)' : fill,
      border: '2px solid var(--navy)',
      overflow: 'hidden',
      color: ink,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize,
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
}

/** Overlapping avatar cluster for household members. */
function AvatarGroup({
  children,
  max = 4,
  size = 36,
  style = {}
}) {
  const items = React.Children.toArray(children);
  const shown = items.slice(0, max);
  const extra = items.length - shown.length;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      ...style
    }
  }, shown.map((child, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      marginLeft: i === 0 ? 0 : -size * 0.32,
      zIndex: i
    }
  }, React.cloneElement(child, {
    size
  }))), extra > 0 ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: -size * 0.32,
      width: size,
      height: size,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--navy)',
      color: 'var(--cream)',
      border: '2px solid var(--cream)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-bold)',
      fontSize: Math.round(size * 0.34),
      zIndex: 99
    }
  }, "+", extra) : null);
}
Object.assign(__ds_scope, { Avatar, AvatarGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Thalaja Badge — small status / count pill.
 */
function Badge({
  children,
  tone = 'neutral',
  // 'neutral' | 'red' | 'mint' | 'indigo' | 'lilac' | 'navy'
  variant = 'soft',
  // 'soft' | 'solid' | 'outline'
  size = 'md',
  // 'sm' | 'md'
  dot = false,
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      soft: ['rgba(13,0,80,.06)', 'var(--ink-700)'],
      solid: ['var(--navy)', 'var(--cream)']
    },
    red: {
      soft: ['var(--red-tint)', 'var(--red-press)'],
      solid: ['var(--red)', 'var(--cream)']
    },
    mint: {
      soft: ['var(--mint-tint)', 'var(--success-ink)'],
      solid: ['var(--mint)', 'var(--navy)']
    },
    indigo: {
      soft: ['var(--indigo-tint)', 'var(--indigo-press)'],
      solid: ['var(--indigo)', 'var(--cream)']
    },
    lilac: {
      soft: ['var(--lilac)', 'var(--navy)'],
      solid: ['var(--lilac-deep)', 'var(--navy)']
    },
    navy: {
      soft: ['rgba(13,0,80,.08)', 'var(--navy)'],
      solid: ['var(--navy)', 'var(--cream)']
    }
  };
  const t = tones[tone] || tones.neutral;
  const [bg, color] = variant === 'solid' ? t.solid : t.soft;
  const dims = size === 'sm' ? {
    font: 'var(--fs-micro)',
    pad: '2px 8px',
    h: 20
  } : {
    font: 'var(--fs-caption)',
    pad: '3px 10px',
    h: 24
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      height: dims.h,
      padding: dims.pad,
      background: variant === 'outline' ? 'transparent' : bg,
      color: variant === 'outline' ? t.soft[1] : color,
      border: variant === 'outline' ? `1.5px solid ${t.soft[1]}` : '1.5px solid transparent',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-bold)',
      fontSize: dims.font,
      lineHeight: 1,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: 'currentColor',
      flex: 'none'
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Thalaja Button — the primary action control.
 * Bold, rounded, with the signature hard-pop shadow on solid variants.
 */
function Button({
  children,
  variant = 'primary',
  // 'primary' | 'secondary' | 'mint' | 'ghost' | 'outline' | 'danger'
  size = 'md',
  // 'sm' | 'md' | 'lg'
  iconLeft,
  iconRight,
  block = false,
  disabled = false,
  type = 'button',
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      height: 'var(--control-h-sm)',
      padding: '0 16px',
      font: 'var(--fs-body-sm)',
      gap: 6
    },
    md: {
      height: 'var(--control-h-md)',
      padding: '0 22px',
      font: 'var(--fs-body)',
      gap: 8
    },
    lg: {
      height: 'var(--control-h-lg)',
      padding: '0 28px',
      font: 'var(--fs-body-lg)',
      gap: 10
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: 'var(--red)',
      color: 'var(--cream)',
      shadow: 'var(--shadow-pop)',
      border: '2.5px solid var(--navy)'
    },
    secondary: {
      background: 'var(--indigo)',
      color: 'var(--cream)',
      shadow: 'var(--shadow-pop)',
      border: '2.5px solid var(--navy)'
    },
    mint: {
      background: 'var(--mint)',
      color: 'var(--navy)',
      shadow: 'var(--shadow-pop)',
      border: '2.5px solid var(--navy)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--navy)',
      shadow: 'none',
      border: '2.5px solid var(--navy)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--indigo)',
      shadow: 'none',
      border: '2.5px solid transparent'
    },
    danger: {
      background: 'var(--red-tint)',
      color: 'var(--red-press)',
      shadow: 'none',
      border: '2.5px solid var(--red)'
    }
  };
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    style: {
      display: block ? 'flex' : 'inline-flex',
      width: block ? '100%' : 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-bold)',
      fontSize: s.font,
      lineHeight: 1,
      color: v.color,
      background: v.background,
      border: v.border,
      borderRadius: 'var(--radius-pill)',
      boxShadow: v.shadow,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'transform .08s ease, box-shadow .08s ease, background .15s ease',
      userSelect: 'none',
      WebkitTapHighlightColor: 'transparent',
      ...style
    },
    onMouseDown: e => {
      if (disabled || v.shadow === 'none') return;
      e.currentTarget.style.transform = 'translate(2px, 3px)';
      e.currentTarget.style.boxShadow = 'none';
    },
    onMouseUp: e => {
      if (disabled) return;
      e.currentTarget.style.transform = '';
      e.currentTarget.style.boxShadow = v.shadow;
    },
    onMouseLeave: e => {
      if (disabled) return;
      e.currentTarget.style.transform = '';
      e.currentTarget.style.boxShadow = v.shadow;
    }
  }, rest), iconLeft ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flex: 'none'
    }
  }, iconLeft) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flex: 'none'
    }
  }, iconRight) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Thalaja Card — rounded surface container.
 * `pop` gives the signature hard-offset shadow + bold outline.
 */
function Card({
  children,
  variant = 'plain',
  // 'plain' | 'pop' | 'sunken' | 'brand'
  tone,
  // optional accent: 'red' | 'mint' | 'indigo' | 'lilac'
  padding = 'md',
  // 'none' | 'sm' | 'md' | 'lg'
  radius = 'lg',
  // 'md' | 'lg' | 'xl'
  style = {},
  ...rest
}) {
  const pads = {
    none: 0,
    sm: 'var(--space-3)',
    md: 'var(--space-5)',
    lg: 'var(--space-7)'
  };
  const radii = {
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)',
    xl: 'var(--radius-xl)'
  };
  const toneFills = {
    red: 'var(--red-tint)',
    mint: 'var(--mint-tint)',
    indigo: 'var(--indigo-tint)',
    lilac: 'var(--lilac)'
  };
  let bg = 'var(--surface-card)';
  let border = '1.5px solid var(--border-soft)';
  let boxShadow = 'none';
  if (tone) bg = toneFills[tone] || bg;
  if (variant === 'pop') {
    border = '2.5px solid var(--navy)';
    boxShadow = 'var(--shadow-pop)';
  } else if (variant === 'sunken') {
    bg = 'var(--surface-sunken)';
    border = '1.5px solid var(--border-soft)';
  } else if (variant === 'brand') {
    bg = 'var(--red)';
    border = '2.5px solid var(--navy)';
    boxShadow = 'var(--shadow-pop)';
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: bg,
      border,
      borderRadius: radii[radius] || radii.lg,
      boxShadow,
      padding: pads[padding] ?? pads.md,
      color: variant === 'brand' ? 'var(--cream)' : 'var(--text-body)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Thalaja IconButton — square/circular icon-only control.
 */
function IconButton({
  children,
  // icon node
  variant = 'soft',
  // 'soft' | 'solid' | 'ghost' | 'outline'
  size = 'md',
  // 'sm' | 'md' | 'lg'
  shape = 'circle',
  // 'circle' | 'rounded'
  tone = 'indigo',
  // 'indigo' | 'red' | 'mint' | 'navy'
  disabled = false,
  ariaLabel,
  style = {},
  ...rest
}) {
  const dims = {
    sm: 36,
    md: 44,
    lg: 52
  }[size] || 44;
  const tones = {
    indigo: {
      soft: ['var(--indigo-tint)', 'var(--indigo)'],
      solid: ['var(--indigo)', 'var(--cream)']
    },
    red: {
      soft: ['var(--red-tint)', 'var(--red-press)'],
      solid: ['var(--red)', 'var(--cream)']
    },
    mint: {
      soft: ['var(--mint-tint)', 'var(--success-ink)'],
      solid: ['var(--mint)', 'var(--navy)']
    },
    navy: {
      soft: ['rgba(13,0,80,.06)', 'var(--navy)'],
      solid: ['var(--navy)', 'var(--cream)']
    }
  };
  const t = tones[tone] || tones.indigo;
  let bg = 'transparent',
    color = 'var(--navy)',
    border = '2px solid transparent';
  if (variant === 'soft') {
    [bg, color] = t.soft;
  } else if (variant === 'solid') {
    [bg, color] = t.solid;
    border = '2px solid var(--navy)';
  } else if (variant === 'outline') {
    color = t.soft[1];
    border = '2px solid var(--navy)';
  } else if (variant === 'ghost') {
    color = t.soft[1];
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel,
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dims,
      height: dims,
      flex: 'none',
      background: bg,
      color,
      border,
      borderRadius: shape === 'circle' ? 'var(--radius-pill)' : 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'transform .08s ease, background .15s ease',
      WebkitTapHighlightColor: 'transparent',
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.9)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = '';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = '';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Thalaja Checkbox — used heavily as the "got it" tick on grocery rows.
 * Rounded, mint when checked, with a hand-drawn check.
 */
function Checkbox({
  checked = false,
  onChange,
  label,
  size = 24,
  disabled = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      userSelect: 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      if (!disabled && onChange) {
        e.preventDefault();
        onChange(!checked);
      }
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      flex: 'none',
      borderRadius: Math.round(size * 0.32),
      background: checked ? 'var(--mint)' : 'var(--surface-card)',
      border: `2.5px solid var(--navy)`,
      transition: 'background .15s ease, transform .1s ease',
      transform: checked ? 'scale(1)' : 'scale(1)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size * 0.62,
    height: size * 0.62,
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      opacity: checked ? 1 : 0,
      transition: 'opacity .12s ease'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 13l4 4L19 7",
    stroke: "var(--navy)",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-body)',
      textDecoration: checked ? 'line-through' : 'none',
      textDecorationColor: 'var(--ink-300)',
      opacity: checked ? 0.55 : 1
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Thalaja Input — text field with optional leading/trailing adornments.
 */
function Input({
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
  const borderColor = error ? 'var(--red)' : focused ? 'var(--indigo)' : 'var(--border-soft)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: 6,
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-strong)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: 'var(--control-h-md)',
      padding: '0 16px',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      border: `2px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focused ? '0 0 0 4px var(--indigo-tint)' : 'none',
      transition: 'border-color .15s ease, box-shadow .15s ease',
      opacity: disabled ? 0.6 : 1
    }
  }, iconLeft ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-muted)',
      flex: 'none'
    }
  }, iconLeft) : null, /*#__PURE__*/React.createElement("input", _extends({
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    type: type,
    disabled: disabled,
    dir: dir,
    onFocus: e => {
      setFocused(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-body)',
      ...inputStyle
    }
  }, rest)), iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-muted)',
      flex: 'none'
    }
  }, iconRight) : null), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 6,
      fontSize: 'var(--fs-caption)',
      color: 'var(--red-press)',
      fontWeight: 'var(--fw-medium)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 6,
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/QtyStepper.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Thalaja QtyStepper — quantity control for grocery items.
 */
function QtyStepper({
  value = 1,
  onChange,
  min = 0,
  max = 99,
  unit,
  size = 'md',
  // 'sm' | 'md'
  disabled = false,
  style = {},
  ...rest
}) {
  const dim = size === 'sm' ? 32 : 40;
  const set = next => {
    if (disabled || !onChange) return;
    onChange(Math.max(min, Math.min(max, next)));
  };
  const btn = (sign, onClick, dis) => /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    disabled: dis,
    style: {
      width: dim,
      height: dim,
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--surface-card)',
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      cursor: dis ? 'not-allowed' : 'pointer',
      opacity: dis ? 0.35 : 1,
      color: 'var(--navy)',
      transition: 'transform .08s ease'
    },
    onMouseDown: e => {
      if (!dis) e.currentTarget.style.transform = 'scale(0.86)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = '';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = '';
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3.5",
    strokeLinecap: "round"
  }, sign === '+' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  })) : /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  })));
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 2,
      padding: 3,
      background: 'var(--surface-sunken)',
      border: '2px solid var(--navy)',
      borderRadius: 'var(--radius-pill)',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, rest), btn('-', () => set(value - 1), disabled || value <= min), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: dim,
      textAlign: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: size === 'sm' ? 16 : 19,
      color: 'var(--navy)',
      fontVariantNumeric: 'tabular-nums',
      display: 'inline-flex',
      alignItems: 'baseline',
      justifyContent: 'center',
      gap: 3
    }
  }, value, unit ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      color: 'var(--text-muted)'
    }
  }, unit) : null), btn('+', () => set(value + 1), disabled || value >= max));
}
Object.assign(__ds_scope, { QtyStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/QtyStepper.jsx", error: String((e && e.message) || e) }); }

// components/forms/SegmentedControl.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Thalaja SegmentedControl — pill tab switcher for view modes / filters.
 */
function SegmentedControl({
  options = [],
  // [{ value, label, badge }] or ['A','B']
  value,
  onChange,
  size = 'md',
  // 'sm' | 'md'
  style = {},
  ...rest
}) {
  const opts = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  const h = size === 'sm' ? 36 : 44;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      padding: 4,
      background: 'var(--surface-sunken)',
      border: '2px solid var(--navy)',
      borderRadius: 'var(--radius-pill)',
      ...style
    }
  }, rest), opts.map(o => {
    const active = o.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      type: "button",
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(o.value),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        height: h,
        padding: '0 18px',
        border: 'none',
        cursor: 'pointer',
        borderRadius: 'var(--radius-pill)',
        background: active ? 'var(--navy)' : 'transparent',
        color: active ? 'var(--cream)' : 'var(--text-muted)',
        fontFamily: 'var(--font-body)',
        fontWeight: 'var(--fw-bold)',
        fontSize: size === 'sm' ? 'var(--fs-body-sm)' : 'var(--fs-body)',
        transition: 'background .15s ease, color .15s ease',
        whiteSpace: 'nowrap'
      }
    }, o.label, o.badge != null ? /*#__PURE__*/React.createElement("span", {
      style: {
        minWidth: 18,
        height: 18,
        padding: '0 5px',
        borderRadius: 999,
        background: active ? 'var(--mint)' : 'var(--ink-100)',
        color: 'var(--navy)',
        fontSize: 11,
        fontWeight: 700,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, o.badge) : null);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/patterns/Blob.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BLOB_PATH = "M 123.7 22.3 Q 110.0 10.0 123.7 22.3 Q 137.4 34.6 154.9 35.1 Q 172.4 35.7 175.7 52.9 Q 179.1 70.1 194.1 81.3 Q 209.1 92.5 196.7 107.8 Q 184.2 123.1 191.6 142.3 Q 199.1 161.4 179.2 165.1 Q 159.4 168.9 151.6 185.8 Q 143.8 202.7 126.9 196.8 Q 110.0 190.9 93.3 196.2 Q 76.7 201.6 68.1 185.9 Q 59.5 170.1 40.7 165.5 Q 21.8 160.9 29.0 142.0 Q 36.1 123.0 22.8 107.6 Q 9.4 92.3 25.9 81.6 Q 42.3 70.9 44.8 53.1 Q 47.2 35.2 64.8 34.6 Q 82.3 33.9 96.2 22.0 Z";
const TONES = {
  red: 'var(--red)',
  mint: 'var(--mint)',
  indigo: 'var(--indigo)',
  lilac: 'var(--lilac)',
  navy: 'var(--navy)',
  cream: 'var(--cream)'
};

/**
 * Thalaja Blob — the signature starburst sticker shape.
 * Use as a decorative container behind an icon/emoji, an empty-state graphic,
 * or a category token. Pass children to center content inside it.
 */
function Blob({
  size = 80,
  tone = 'red',
  halo = 'var(--cream)',
  // outline color; null for none
  haloWidth = 7,
  rotate = 0,
  children,
  style = {},
  ...rest
}) {
  const fill = TONES[tone] || tone;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-grid',
      placeItems: 'center',
      width: size,
      height: size,
      flex: 'none',
      transform: rotate ? `rotate(${rotate}deg)` : undefined,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 220 220",
    width: size,
    height: size,
    style: {
      position: 'absolute',
      inset: 0,
      color: fill
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: BLOB_PATH,
    fill: "currentColor",
    stroke: halo || 'none',
    strokeWidth: halo ? haloWidth : 0
  })), children != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'grid',
      placeItems: 'center',
      transform: rotate ? `rotate(${-rotate}deg)` : undefined
    }
  }, children) : null);
}
Object.assign(__ds_scope, { Blob });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/Blob.jsx", error: String((e && e.message) || e) }); }

// components/patterns/CategoryChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Thalaja CategoryChip — selectable filter chip for grocery categories.
 */
function CategoryChip({
  label,
  icon,
  // emoji or node
  selected = false,
  onClick,
  tone = 'indigo',
  // 'indigo' | 'red' | 'mint' | 'lilac'
  style = {},
  ...rest
}) {
  const tones = {
    indigo: 'var(--indigo)',
    red: 'var(--red)',
    mint: 'var(--mint)',
    lilac: 'var(--lilac-deep)'
  };
  const sel = tones[tone] || tones.indigo;
  const selInk = tone === 'mint' || tone === 'lilac' ? 'var(--navy)' : 'var(--cream)';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    "aria-pressed": selected,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      height: 38,
      padding: '0 16px',
      cursor: 'pointer',
      background: selected ? sel : 'var(--surface-card)',
      color: selected ? selInk : 'var(--text-body)',
      border: `2px solid ${selected ? 'var(--navy)' : 'var(--border-soft)'}`,
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-body-sm)',
      boxShadow: selected ? 'var(--shadow-pop-sm)' : 'none',
      transition: 'background .15s ease, transform .08s ease, box-shadow .08s ease',
      whiteSpace: 'nowrap',
      ...style
    },
    onMouseDown: e => {
      e.currentTarget.style.transform = 'scale(0.96)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = '';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = '';
    }
  }, rest), icon != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      lineHeight: 1
    }
  }, icon) : null, label);
}
Object.assign(__ds_scope, { CategoryChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/CategoryChip.jsx", error: String((e && e.message) || e) }); }

// components/patterns/GroceryItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Thalaja GroceryItem — the core shared-list row.
 * Composes Checkbox + (optional) category token + meta + a trailing slot.
 */
function GroceryItem({
  name,
  note,
  // secondary line e.g. "2 cartons · full fat"
  checked = false,
  onToggle,
  category,
  // emoji string or node, shown in a tinted token
  categoryTone = 'lilac',
  addedBy,
  // name -> small avatar
  trailing,
  // node on the right (e.g. QtyStepper)
  dir,
  style = {},
  ...rest
}) {
  const toneFill = {
    red: 'var(--red-tint)',
    mint: 'var(--mint-tint)',
    indigo: 'var(--indigo-tint)',
    lilac: 'var(--lilac)'
  }[categoryTone] || 'var(--lilac)';
  return /*#__PURE__*/React.createElement("div", _extends({
    dir: dir,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 14px',
      background: 'var(--surface-card)',
      border: '1.5px solid var(--border-soft)',
      borderRadius: 'var(--radius-md)',
      opacity: checked ? 0.72 : 1,
      transition: 'opacity .15s ease',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    checked: checked,
    onChange: onToggle,
    size: 26
  }), category != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
      flex: 'none',
      fontSize: 20,
      background: toneFill,
      borderRadius: 'var(--radius-sm)'
    }
  }, category) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-strong)',
      textDecoration: checked ? 'line-through' : 'none',
      textDecorationColor: 'var(--ink-300)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, name), note ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-muted)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, note) : null), addedBy ? /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: addedBy,
    size: 28
  }) : null, trailing != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none'
    }
  }, trailing) : null);
}
Object.assign(__ds_scope, { GroceryItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/GroceryItem.jsx", error: String((e && e.message) || e) }); }

// components/patterns/ListSummaryCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Thalaja ListSummaryCard — a tappable card for a shared grocery list.
 * Shows title, household, member cluster, and a progress bar.
 */
function ListSummaryCard({
  title,
  household,
  members = [],
  // array of names
  total = 0,
  done = 0,
  accent = 'red',
  // 'red' | 'indigo' | 'mint' | 'lilac'
  onClick,
  style = {},
  ...rest
}) {
  const accents = {
    red: 'var(--red)',
    indigo: 'var(--indigo)',
    mint: 'var(--mint)',
    lilac: 'var(--lilac-deep)'
  };
  const bar = accents[accent] || accents.red;
  const pct = total > 0 ? Math.round(done / total * 100) : 0;
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      padding: 18,
      background: 'var(--surface-card)',
      border: '2.5px solid var(--navy)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-pop)',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'transform .1s ease, box-shadow .1s ease',
      ...style
    },
    onMouseDown: e => {
      if (onClick) {
        e.currentTarget.style.transform = 'translate(2px,3px)';
        e.currentTarget.style.boxShadow = 'none';
      }
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = '';
      e.currentTarget.style.boxShadow = 'var(--shadow-pop)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = '';
      e.currentTarget.style.boxShadow = 'var(--shadow-pop)';
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-title)',
      color: 'var(--text-strong)',
      lineHeight: 1.15,
      marginBottom: 2
    }
  }, title), household ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-muted)',
      fontWeight: 600
    }
  }, household) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      borderRadius: 999,
      background: bar,
      flex: 'none',
      border: '2px solid var(--navy)',
      marginTop: 4
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 12,
      borderRadius: 999,
      background: 'var(--surface-sunken)',
      overflow: 'hidden',
      border: '1.5px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: '100%',
      background: bar,
      borderRadius: 999,
      transition: 'width .3s ease'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-muted)'
    }
  }, done, "/", total, " done"), members.length ? /*#__PURE__*/React.createElement(__ds_scope.AvatarGroup, {
    size: 28,
    max: 4
  }, members.map((m, i) => /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    key: i,
    name: m
  }))) : null)));
}
Object.assign(__ds_scope, { ListSummaryCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/ListSummaryCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/thalaja-app/app.jsx
try { (() => {
// Thalaja UI kit — app shell, screens, and demo state.
// Primitives come from ui.jsx (window.*), icons from icons.jsx (window.Icons).
const {
  useState
} = React;
const I = window.Icons;

// ── Demo data ─────────────────────────────────────────────
const MEMBERS = ['Reem', 'Sara', 'Khalid', 'Nora', 'Mona'];
const CATS = [{
  id: 'all',
  label: 'All',
  icon: '🧺'
}, {
  id: 'dairy',
  label: 'Dairy',
  icon: '🥛',
  tone: 'indigo'
}, {
  id: 'produce',
  label: 'Produce',
  icon: '🥬',
  tone: 'mint'
}, {
  id: 'bakery',
  label: 'Bakery',
  icon: '🍞',
  tone: 'red'
}, {
  id: 'pantry',
  label: 'Pantry',
  icon: '🫙',
  tone: 'lilac'
}, {
  id: 'meat',
  label: 'Meat',
  icon: '🍗',
  tone: 'red'
}];
const initialLists = [{
  id: 'l1',
  title: 'Weekend run',
  accent: 'red',
  members: ['Reem', 'Sara', 'Khalid', 'Nora', 'Mona'],
  items: [{
    id: 1,
    name: 'Laban',
    note: '2 cartons · full fat',
    cat: 'dairy',
    by: 'Reem',
    qty: 2,
    done: false
  }, {
    id: 2,
    name: 'Cucumber',
    note: '1 kg',
    cat: 'produce',
    by: 'Sara',
    qty: 1,
    done: false
  }, {
    id: 3,
    name: 'Tamees bread',
    note: '4 loaves',
    cat: 'bakery',
    by: 'Khalid',
    qty: 4,
    done: false
  }, {
    id: 4,
    name: 'Tomatoes',
    note: '1.5 kg',
    cat: 'produce',
    by: 'Nora',
    qty: 1,
    done: true
  }, {
    id: 5,
    name: 'Eggs',
    note: '1 tray',
    cat: 'dairy',
    by: 'Reem',
    qty: 1,
    done: true
  }, {
    id: 6,
    name: 'Chicken',
    note: '2 kg · whole',
    cat: 'meat',
    by: 'Mona',
    qty: 2,
    done: false
  }]
}, {
  id: 'l2',
  title: 'Ramadan pantry',
  accent: 'indigo',
  members: ['Reem', 'Nora', 'Mona'],
  items: [{
    id: 1,
    name: 'Dates — Sukkari',
    note: '2 kg',
    cat: 'pantry',
    by: 'Nora',
    qty: 2,
    done: true
  }, {
    id: 2,
    name: 'Vermicelli',
    note: '3 packs',
    cat: 'pantry',
    by: 'Reem',
    qty: 3,
    done: false
  }, {
    id: 3,
    name: 'Rose water',
    note: '1 bottle',
    cat: 'pantry',
    by: 'Mona',
    qty: 1,
    done: false
  }]
}, {
  id: 'l3',
  title: 'Coffee corner',
  accent: 'mint',
  members: ['Khalid', 'Reem'],
  items: [{
    id: 1,
    name: 'Arabic coffee beans',
    note: '500 g',
    cat: 'pantry',
    by: 'Khalid',
    qty: 1,
    done: false
  }, {
    id: 2,
    name: 'Cardamom',
    note: '100 g',
    cat: 'pantry',
    by: 'Reem',
    qty: 1,
    done: false
  }]
}];
const catIcon = id => (CATS.find(c => c.id === id) || {}).icon || '🛒';
const catTone = id => (CATS.find(c => c.id === id) || {}).tone || 'lilac';

// ── Phone frame ───────────────────────────────────────────
function Phone({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      height: 'min(844px, 94vh)',
      background: 'var(--cream)',
      borderRadius: 46,
      border: '3px solid var(--navy)',
      boxShadow: '0 30px 70px rgba(13,0,80,.28)',
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 50,
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 26px 0 30px',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 15,
      color: 'var(--navy)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '50%',
      top: 9,
      transform: 'translateX(-50%)',
      width: 110,
      height: 26,
      background: 'var(--navy)',
      borderRadius: 999
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "12",
    viewBox: "0 0 18 12",
    fill: "var(--navy)"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7",
    width: "3",
    height: "5",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "5",
    y: "4",
    width: "3",
    height: "8",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "10",
    y: "1.5",
    width: "3",
    height: "10.5",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "15",
    y: "0",
    width: "3",
    height: "12",
    rx: "1",
    opacity: "0.35"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "12",
    viewBox: "0 0 24 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "1",
    width: "20",
    height: "10",
    rx: "3",
    stroke: "var(--navy)",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "14",
    height: "6",
    rx: "1.5",
    fill: "var(--navy)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "22",
    y: "4",
    width: "1.5",
    height: "4",
    rx: "1",
    fill: "var(--navy)"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      position: 'relative',
      display: 'flex',
      flexDirection: 'column'
    }
  }, children));
}

// ── Bottom tab bar ────────────────────────────────────────
function TabBar({
  tab,
  setTab
}) {
  const tabs = [{
    id: 'home',
    icon: I.home,
    label: 'Lists'
  }, {
    id: 'shop',
    icon: I.cart,
    label: 'Shop'
  }, {
    id: 'people',
    icon: I.users,
    label: 'Household'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      padding: '8px 16px 22px',
      background: 'var(--surface-card)',
      borderTop: '1.5px solid var(--border-soft)'
    }
  }, tabs.map(t => {
    const a = t.id === tab;
    const Ico = t.icon;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => setTab(t.id),
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        padding: '4px 14px',
        color: a ? 'var(--red)' : 'var(--ink-300)'
      }
    }, /*#__PURE__*/React.createElement(Ico, {
      size: 25,
      sw: a ? 2.6 : 2.2
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 11,
        color: a ? 'var(--navy)' : 'var(--ink-300)'
      }
    }, t.label));
  }));
}

// ── Home screen ───────────────────────────────────────────
function HomeScreen({
  lists,
  openList,
  onAdd
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      overflowY: 'auto',
      padding: '8px 20px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-muted)'
    }
  }, "Sabah al-khair, Reem \uD83D\uDC4B"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 28,
      fontWeight: 700,
      color: 'var(--navy)',
      lineHeight: 1.2
    }
  }, "Al-Otaibi fridge")), /*#__PURE__*/React.createElement(IconButton, {
    tone: "indigo",
    variant: "soft",
    ariaLabel: "Notifications"
  }, /*#__PURE__*/React.createElement(I.bell, {
    size: 22
  }))), /*#__PURE__*/React.createElement("div", {
    onClick: onAdd,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '13px 16px',
      background: 'var(--surface-card)',
      border: '2px solid var(--navy)',
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-pop-sm)',
      cursor: 'pointer',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(I.search, {
    size: 20,
    stroke: "var(--ink-300)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      color: 'var(--ink-300)',
      fontSize: 15
    }
  }, "Add to a list\u2026"), /*#__PURE__*/React.createElement(I.mic, {
    size: 20,
    stroke: "var(--indigo)"
  })), /*#__PURE__*/React.createElement(Card, {
    tone: "lilac",
    radius: "lg",
    padding: "md",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 24,
      border: '2px solid var(--navy)'
    }
  }, /*#__PURE__*/React.createElement(Blob, {
    size: 56,
    tone: "red",
    rotate: -8
  }, /*#__PURE__*/React.createElement(I.sparkle, {
    size: 26,
    stroke: "var(--cream)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 17,
      color: 'var(--navy)'
    }
  }, "Suhoor is in 3 days"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--navy)',
      opacity: .8
    }
  }, "Thalaja noticed you're low on dates & laban."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      color: 'var(--navy)'
    }
  }, "Shared lists"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, lists.length)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, lists.map(l => /*#__PURE__*/React.createElement(ListSummaryCard, {
    key: l.id,
    title: l.title,
    household: "Al-Otaibi household",
    members: l.members,
    total: l.items.length,
    done: l.items.filter(i => i.done).length,
    accent: l.accent,
    onClick: () => openList(l.id)
  }))));
}

// ── List detail screen ────────────────────────────────────
function ListDetail({
  list,
  back,
  toggle,
  setQty,
  onAdd
}) {
  const [cat, setCat] = useState('all');
  const [seg, setSeg] = useState('todo');
  const visible = list.items.filter(i => (cat === 'all' || i.cat === cat) && (seg === 'todo' ? !i.done : i.done));
  const todo = list.items.filter(i => !i.done).length;
  const done = list.items.filter(i => i.done).length;
  const acc = {
    red: 'var(--red)',
    indigo: 'var(--indigo)',
    mint: 'var(--mint)'
  }[list.accent];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      padding: '4px 18px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    tone: "navy",
    variant: "soft",
    ariaLabel: "Back",
    onClick: back
  }, /*#__PURE__*/React.createElement(I.chevronLeft, {
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    tone: "navy",
    variant: "soft",
    ariaLabel: "Share"
  }, /*#__PURE__*/React.createElement(I.share, {
    size: 20
  })), /*#__PURE__*/React.createElement(IconButton, {
    tone: "navy",
    variant: "soft",
    ariaLabel: "More"
  }, /*#__PURE__*/React.createElement(I.dots, {
    size: 20
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Blob, {
    size: 52,
    tone: list.accent,
    rotate: -6
  }, /*#__PURE__*/React.createElement(I.cart, {
    size: 24,
    stroke: list.accent === 'mint' ? 'var(--navy)' : 'var(--cream)'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 26,
      color: 'var(--navy)',
      lineHeight: 1
    }
  }, list.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(AvatarGroup, {
    size: 26,
    max: 4
  }, list.members.map((m, i) => /*#__PURE__*/React.createElement(Avatar, {
    key: i,
    name: m
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-muted)'
    }
  }, list.members.length, " shopping")))), /*#__PURE__*/React.createElement(SegmentedControl, {
    value: seg,
    onChange: setSeg,
    size: "sm",
    style: {
      width: '100%',
      display: 'flex'
    },
    options: [{
      value: 'todo',
      label: 'To buy',
      badge: todo
    }, {
      value: 'done',
      label: 'Bought',
      badge: done
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      display: 'flex',
      gap: 8,
      padding: '0 18px 14px',
      overflowX: 'auto'
    }
  }, CATS.map(c => /*#__PURE__*/React.createElement(CategoryChip, {
    key: c.id,
    label: c.label,
    icon: c.icon,
    tone: c.tone || 'indigo',
    selected: cat === c.id,
    onClick: () => setCat(c.id)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      overflowY: 'auto',
      padding: '0 18px 90px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, visible.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12,
      padding: '40px 0',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Blob, {
    size: 88,
    tone: "lilac",
    halo: null
  }, /*#__PURE__*/React.createElement(I.check, {
    size: 40,
    stroke: "var(--navy)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 19,
      color: 'var(--navy)'
    }
  }, seg === 'todo' ? 'All bought! 🎉' : 'Nothing here yet')) : visible.map(it => /*#__PURE__*/React.createElement(GroceryItem, {
    key: it.id,
    name: it.name,
    note: it.note,
    category: catIcon(it.cat),
    categoryTone: catTone(it.cat),
    addedBy: it.by,
    checked: it.done,
    onToggle: () => toggle(it.id),
    trailing: !it.done ? /*#__PURE__*/React.createElement(QtyStepper, {
      value: it.qty,
      onChange: q => setQty(it.id, q),
      size: "sm"
    }) : null
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: '12px 18px 18px',
      background: 'linear-gradient(to top, var(--cream) 70%, transparent)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    block: true,
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(I.plus, {
      size: 22
    }),
    onClick: onAdd
  }, "Add item")));
}

// ── Add item sheet ────────────────────────────────────────
function AddSheet({
  onClose,
  onConfirm
}) {
  const [name, setName] = useState('');
  const [cat, setCat] = useState('produce');
  const [qty, setQty] = useState(1);
  const [by, setBy] = useState('Reem');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 20,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(13,0,80,.4)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--surface-card)',
      borderTopLeftRadius: 32,
      borderTopRightRadius: 32,
      border: '2.5px solid var(--navy)',
      borderBottom: 'none',
      padding: '14px 20px 26px',
      boxShadow: '0 -10px 40px rgba(13,0,80,.2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 5,
      borderRadius: 999,
      background: 'var(--ink-100)',
      margin: '0 auto 16px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--navy)',
      lineHeight: 1.2
    }
  }, "Add item"), /*#__PURE__*/React.createElement(IconButton, {
    tone: "navy",
    variant: "soft",
    size: "sm",
    ariaLabel: "Close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(I.x, {
    size: 18
  }))), /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    value: name,
    onChange: e => setName(e.target.value),
    placeholder: "What do we need?",
    style: {
      width: '100%',
      height: 52,
      padding: '0 18px',
      marginBottom: 16,
      boxSizing: 'border-box',
      background: 'var(--surface-card)',
      border: '2px solid var(--navy)',
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      fontWeight: 600,
      color: 'var(--text-body)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 13,
      color: 'var(--text-muted)',
      marginBottom: 8
    }
  }, "Category"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginBottom: 18
    }
  }, CATS.filter(c => c.id !== 'all').map(c => /*#__PURE__*/React.createElement(CategoryChip, {
    key: c.id,
    label: c.label,
    icon: c.icon,
    tone: c.tone || 'indigo',
    selected: cat === c.id,
    onClick: () => setCat(c.id)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 15,
      color: 'var(--navy)'
    }
  }, "Quantity"), /*#__PURE__*/React.createElement(QtyStepper, {
    value: qty,
    onChange: setQty,
    min: 1
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    block: true,
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(I.plus, {
      size: 22
    }),
    onClick: () => onConfirm({
      name: name.trim() || 'New item',
      cat,
      qty,
      by
    })
  }, "Add to list")));
}

// ── Household screen ──────────────────────────────────────
function Household() {
  const roles = {
    Reem: 'Admin',
    Sara: 'Member',
    Khalid: 'Member',
    Nora: 'Member',
    Mona: 'Member'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      overflowY: 'auto',
      padding: '8px 20px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      fontWeight: 700,
      color: 'var(--navy)',
      marginBottom: 18
    }
  }, "Household"), /*#__PURE__*/React.createElement(Card, {
    variant: "brand",
    radius: "xl",
    padding: "lg",
    style: {
      marginBottom: 22,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Blob, {
    size: 130,
    tone: "indigo",
    halo: "var(--red)",
    haloWidth: 5,
    style: {
      position: 'absolute',
      right: -30,
      top: -30,
      opacity: .9
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 13,
      opacity: .85,
      letterSpacing: '.04em',
      textTransform: 'uppercase'
    }
  }, "Family fridge"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 30,
      lineHeight: 1.05,
      margin: '4px 0 14px'
    }
  }, "Al-Otaibi household"), /*#__PURE__*/React.createElement(AvatarGroup, {
    size: 38,
    max: 5
  }, MEMBERS.map((m, i) => /*#__PURE__*/React.createElement(Avatar, {
    key: i,
    name: m
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      color: 'var(--navy)'
    }
  }, "Members"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(I.plus, {
      size: 18
    })
  }, "Invite")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      marginBottom: 20
    }
  }, MEMBERS.map(m => /*#__PURE__*/React.createElement("div", {
    key: m,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '10px 14px',
      background: 'var(--surface-card)',
      border: '1.5px solid var(--border-soft)',
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: m,
    size: 42
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--text-strong)'
    }
  }, m), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, m === 'Reem' ? 'You' : 'Joined this month')), /*#__PURE__*/React.createElement(Badge, {
    tone: roles[m] === 'Admin' ? 'mint' : 'neutral'
  }, roles[m])))));
}

// ── App shell ─────────────────────────────────────────────
function App() {
  const [tab, setTab] = useState('home');
  const [lists, setLists] = useState(initialLists);
  const [openId, setOpenId] = useState(null);
  const [sheet, setSheet] = useState(false);
  const open = lists.find(l => l.id === openId);
  const update = (id, fn) => setLists(ls => ls.map(l => l.id === id ? fn(l) : l));
  const toggle = itemId => update(openId, l => ({
    ...l,
    items: l.items.map(i => i.id === itemId ? {
      ...i,
      done: !i.done
    } : i)
  }));
  const setQty = (itemId, q) => update(openId, l => ({
    ...l,
    items: l.items.map(i => i.id === itemId ? {
      ...i,
      qty: q
    } : i)
  }));
  const addItem = data => {
    const targetId = openId || lists[0].id;
    update(targetId, l => ({
      ...l,
      items: [{
        id: Date.now(),
        name: data.name,
        note: `${data.qty} · added by ${data.by}`,
        cat: data.cat,
        by: data.by,
        qty: data.qty,
        done: false
      }, ...l.items]
    }));
    if (!openId) {
      setOpenId(targetId);
      setTab('home');
    }
    setSheet(false);
  };
  let body;
  if (open) {
    body = /*#__PURE__*/React.createElement(ListDetail, {
      list: open,
      back: () => setOpenId(null),
      toggle: toggle,
      setQty: setQty,
      onAdd: () => setSheet(true)
    });
  } else if (tab === 'people') {
    body = /*#__PURE__*/React.createElement(Household, null);
  } else if (tab === 'shop') {
    body = /*#__PURE__*/React.createElement(ShopScreen, {
      lists: lists,
      openList: id => setOpenId(id)
    });
  } else {
    body = /*#__PURE__*/React.createElement(HomeScreen, {
      lists: lists,
      openList: id => setOpenId(id),
      onAdd: () => setSheet(true)
    });
  }
  return /*#__PURE__*/React.createElement(Phone, null, body, !open && /*#__PURE__*/React.createElement(TabBar, {
    tab: tab,
    setTab: t => {
      setTab(t);
      setOpenId(null);
    }
  }), sheet && /*#__PURE__*/React.createElement(AddSheet, {
    onClose: () => setSheet(false),
    onConfirm: addItem
  }));
}

// ── Shop (aggregated buy view) ────────────────────────────
function ShopScreen({
  lists,
  openList
}) {
  const all = lists.flatMap(l => l.items.filter(i => !i.done).map(i => ({
    ...i,
    list: l.title,
    listId: l.id,
    accent: l.accent
  })));
  const byCat = {};
  all.forEach(i => {
    (byCat[i.cat] = byCat[i.cat] || []).push(i);
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      overflowY: 'auto',
      padding: '8px 20px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      fontWeight: 700,
      color: 'var(--navy)',
      marginBottom: 4
    }
  }, "Shopping run"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-muted)',
      fontWeight: 600,
      marginBottom: 20
    }
  }, all.length, " items across ", lists.length, " lists, grouped by aisle"), Object.entries(byCat).map(([c, items]) => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18
    }
  }, catIcon(c)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 17,
      color: 'var(--navy)',
      textTransform: 'capitalize'
    }
  }, c), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    size: "sm"
  }, items.length)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.listId + it.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '11px 14px',
      background: 'var(--surface-card)',
      border: '1.5px solid var(--border-soft)',
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      flex: 'none',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--surface-sunken)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 17
    }
  }, catIcon(it.cat)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 15,
      color: 'var(--text-strong)'
    }
  }, it.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, it.list, " \xB7 ", it.qty, "\xD7")), /*#__PURE__*/React.createElement(Avatar, {
    name: it.by,
    size: 26
  })))))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/thalaja-app/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/thalaja-app/icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Thalaja UI kit — icon set. Lucide-style line icons (stroke 2.2, round caps),
// inlined for a self-contained kit. Lucide is the canonical icon system (see README ICONOGRAPHY).
const Icon = ({
  d,
  size = 24,
  stroke = 'currentColor',
  sw = 2.2,
  fill = 'none',
  children,
  ...rest
}) => /*#__PURE__*/React.createElement("svg", _extends({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: fill,
  stroke: stroke,
  strokeWidth: sw,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, rest), children || (Array.isArray(d) ? d.map((p, i) => /*#__PURE__*/React.createElement("path", {
  key: i,
  d: p
})) : /*#__PURE__*/React.createElement("path", {
  d: d
})));
const Icons = {
  plus: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  })),
  check: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M20 6L9 17l-5-5"
  })),
  search: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 21l-4.3-4.3"
  })),
  home: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M3 10.5L12 3l9 7.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 9.5V21h14V9.5"
  })),
  list: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M8 6h13"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 12h13"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 18h13"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "3.5",
    cy: "6",
    r: "1.2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "3.5",
    cy: "12",
    r: "1.2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "3.5",
    cy: "18",
    r: "1.2"
  })),
  users: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "8",
    r: "3.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 5.2a3.2 3.2 0 010 5.6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 20c0-2.8-1.8-4.8-4-5.3"
  })),
  bell: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M6 8a6 6 0 0112 0c0 7 3 9 3 9H3s3-2 3-9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.3 21a1.94 1.94 0 003.4 0"
  })),
  cart: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "20",
    r: "1.4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "20",
    r: "1.4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 3h2.2l2.3 12.4a1.6 1.6 0 001.6 1.3h8.9a1.6 1.6 0 001.6-1.3L21 7H5.3"
  })),
  trash: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M3 6h18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 6V4h8v2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 6l1 14h10l1-14"
  })),
  chevronLeft: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M15 5l-7 7 7 7"
  })),
  chevronRight: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M9 5l7 7-7 7"
  })),
  x: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 6L6 18"
  })),
  dots: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
    cx: "5",
    cy: "12",
    r: "1.4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1.4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "12",
    r: "1.4"
  })),
  share: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "5",
    r: "2.6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "12",
    r: "2.6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "19",
    r: "2.6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.3 10.8l7.4-4.3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.3 13.2l7.4 4.3"
  })),
  clock: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7v5l3 2"
  })),
  sparkle: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"
  })),
  mic: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "3",
    width: "6",
    height: "11",
    rx: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 11a7 7 0 0014 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 18v3"
  }))
};
window.Icons = Icons;
window.Icon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/thalaja-app/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/thalaja-app/ui.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Thalaja UI kit — primitives. Cosmetic recreations of the design-system
// components (components/**), token-driven, inlined for a self-contained kit.
const BLOB_PATH = "M 123.7 22.3 Q 110.0 10.0 123.7 22.3 Q 137.4 34.6 154.9 35.1 Q 172.4 35.7 175.7 52.9 Q 179.1 70.1 194.1 81.3 Q 209.1 92.5 196.7 107.8 Q 184.2 123.1 191.6 142.3 Q 199.1 161.4 179.2 165.1 Q 159.4 168.9 151.6 185.8 Q 143.8 202.7 126.9 196.8 Q 110.0 190.9 93.3 196.2 Q 76.7 201.6 68.1 185.9 Q 59.5 170.1 40.7 165.5 Q 21.8 160.9 29.0 142.0 Q 36.1 123.0 22.8 107.6 Q 9.4 92.3 25.9 81.6 Q 42.3 70.9 44.8 53.1 Q 47.2 35.2 64.8 34.6 Q 82.3 33.9 96.2 22.0 Z";
function Blob({
  size = 80,
  tone = 'red',
  halo = 'var(--cream)',
  haloWidth = 7,
  rotate = 0,
  children,
  style = {}
}) {
  const TONES = {
    red: 'var(--red)',
    mint: 'var(--mint)',
    indigo: 'var(--indigo)',
    lilac: 'var(--lilac)',
    navy: 'var(--navy)',
    cream: 'var(--cream)'
  };
  const fill = TONES[tone] || tone;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-grid',
      placeItems: 'center',
      width: size,
      height: size,
      flex: 'none',
      transform: rotate ? `rotate(${rotate}deg)` : undefined,
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 220 220",
    width: size,
    height: size,
    style: {
      position: 'absolute',
      inset: 0,
      color: fill
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: BLOB_PATH,
    fill: "currentColor",
    stroke: halo || 'none',
    strokeWidth: halo ? haloWidth : 0
  })), children != null && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'grid',
      placeItems: 'center',
      transform: rotate ? `rotate(${-rotate}deg)` : undefined
    }
  }, children));
}
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  block = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      h: 36,
      p: '0 16px',
      f: 14,
      g: 6
    },
    md: {
      h: 48,
      p: '0 22px',
      f: 16,
      g: 8
    },
    lg: {
      h: 56,
      p: '0 28px',
      f: 18,
      g: 10
    }
  }[size];
  const V = {
    primary: {
      bg: 'var(--red)',
      c: 'var(--cream)',
      sh: 'var(--shadow-pop)',
      b: '2.5px solid var(--navy)'
    },
    secondary: {
      bg: 'var(--indigo)',
      c: 'var(--cream)',
      sh: 'var(--shadow-pop)',
      b: '2.5px solid var(--navy)'
    },
    mint: {
      bg: 'var(--mint)',
      c: 'var(--navy)',
      sh: 'var(--shadow-pop)',
      b: '2.5px solid var(--navy)'
    },
    outline: {
      bg: 'transparent',
      c: 'var(--navy)',
      sh: 'none',
      b: '2.5px solid var(--navy)'
    },
    ghost: {
      bg: 'transparent',
      c: 'var(--indigo)',
      sh: 'none',
      b: '2.5px solid transparent'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
      display: block ? 'flex' : 'inline-flex',
      width: block ? '100%' : 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      gap: sizes.g,
      height: sizes.h,
      padding: sizes.p,
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: sizes.f,
      lineHeight: 1,
      color: V.c,
      background: V.bg,
      border: V.b,
      borderRadius: 'var(--radius-pill)',
      boxShadow: V.sh,
      whiteSpace: 'nowrap',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'transform .08s, box-shadow .08s',
      WebkitTapHighlightColor: 'transparent',
      ...style
    },
    onMouseDown: e => {
      if (disabled || V.sh === 'none') return;
      e.currentTarget.style.transform = 'translate(2px,3px)';
      e.currentTarget.style.boxShadow = 'none';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = '';
      e.currentTarget.style.boxShadow = V.sh;
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = '';
      e.currentTarget.style.boxShadow = V.sh;
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flex: 'none'
    }
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flex: 'none'
    }
  }, iconRight));
}
function IconButton({
  children,
  variant = 'soft',
  size = 'md',
  shape = 'circle',
  tone = 'indigo',
  style = {},
  ...rest
}) {
  const dim = {
    sm: 36,
    md: 44,
    lg: 52
  }[size];
  const T = {
    indigo: {
      soft: ['var(--indigo-tint)', 'var(--indigo)'],
      solid: ['var(--indigo)', 'var(--cream)']
    },
    red: {
      soft: ['var(--red-tint)', 'var(--red-press)'],
      solid: ['var(--red)', 'var(--cream)']
    },
    mint: {
      soft: ['var(--mint-tint)', 'var(--success-ink)'],
      solid: ['var(--mint)', 'var(--navy)']
    },
    navy: {
      soft: ['rgba(13,0,80,.06)', 'var(--navy)'],
      solid: ['var(--navy)', 'var(--cream)']
    }
  }[tone];
  let bg = 'transparent',
    c = 'var(--navy)',
    b = '2px solid transparent';
  if (variant === 'soft') {
    [bg, c] = T.soft;
  } else if (variant === 'solid') {
    [bg, c] = T.solid;
    b = '2px solid var(--navy)';
  } else if (variant === 'outline') {
    c = T.soft[1];
    b = '2px solid var(--navy)';
  } else if (variant === 'ghost') {
    c = T.soft[1];
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      flex: 'none',
      background: bg,
      color: c,
      border: b,
      borderRadius: shape === 'circle' ? 'var(--radius-pill)' : 'var(--radius-md)',
      cursor: 'pointer',
      transition: 'transform .08s',
      WebkitTapHighlightColor: 'transparent',
      ...style
    },
    onMouseDown: e => e.currentTarget.style.transform = 'scale(0.9)',
    onMouseUp: e => e.currentTarget.style.transform = '',
    onMouseLeave: e => e.currentTarget.style.transform = ''
  }, rest), children);
}
function Badge({
  children,
  tone = 'neutral',
  variant = 'soft',
  size = 'md',
  dot = false,
  style = {}
}) {
  const T = {
    neutral: {
      soft: ['rgba(13,0,80,.06)', 'var(--ink-700)'],
      solid: ['var(--navy)', 'var(--cream)']
    },
    red: {
      soft: ['var(--red-tint)', 'var(--red-press)'],
      solid: ['var(--red)', 'var(--cream)']
    },
    mint: {
      soft: ['var(--mint-tint)', 'var(--success-ink)'],
      solid: ['var(--mint)', 'var(--navy)']
    },
    indigo: {
      soft: ['var(--indigo-tint)', 'var(--indigo-press)'],
      solid: ['var(--indigo)', 'var(--cream)']
    },
    lilac: {
      soft: ['var(--lilac)', 'var(--navy)'],
      solid: ['var(--lilac-deep)', 'var(--navy)']
    }
  }[tone];
  const [bg, c] = variant === 'solid' ? T.solid : T.soft;
  const d = size === 'sm' ? {
    f: 11,
    p: '2px 8px',
    h: 20
  } : {
    f: 13,
    p: '3px 10px',
    h: 24
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      height: d.h,
      padding: d.p,
      background: variant === 'outline' ? 'transparent' : bg,
      color: variant === 'outline' ? T.soft[1] : c,
      border: variant === 'outline' ? `1.5px solid ${T.soft[1]}` : '1.5px solid transparent',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: d.f,
      lineHeight: 1,
      whiteSpace: 'nowrap',
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: 'currentColor',
      flex: 'none'
    }
  }), children);
}
const AV_FILLS = ['var(--red)', 'var(--indigo)', 'var(--mint)', 'var(--lilac-deep)'];
const AV_INK = {
  'var(--red)': 'var(--cream)',
  'var(--indigo)': 'var(--cream)',
  'var(--mint)': 'var(--navy)',
  'var(--lilac-deep)': 'var(--navy)'
};
function Avatar({
  name = '',
  src,
  size = 44,
  shape = 'circle',
  colorIndex,
  style = {}
}) {
  const initials = name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  const idx = colorIndex != null ? colorIndex % 4 : [...name].reduce((a, c) => a + c.charCodeAt(0), 0) % 4;
  const fill = AV_FILLS[idx],
    ink = AV_INK[fill],
    fs = Math.round(size * 0.4);
  if (shape === 'blob') return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-grid',
      placeItems: 'center',
      width: size,
      height: size,
      flex: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 220 220",
    width: size,
    height: size,
    style: {
      position: 'absolute',
      inset: 0,
      color: fill
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: BLOB_PATH,
    fill: "currentColor",
    stroke: "var(--cream)",
    strokeWidth: "8"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: fs,
      color: ink
    }
  }, initials));
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      flex: 'none',
      borderRadius: 'var(--radius-pill)',
      background: src ? 'var(--surface-sunken)' : fill,
      border: '2px solid var(--navy)',
      overflow: 'hidden',
      color: ink,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: fs,
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
}
function AvatarGroup({
  children,
  max = 4,
  size = 36,
  style = {}
}) {
  const items = React.Children.toArray(children),
    shown = items.slice(0, max),
    extra = items.length - shown.length;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      ...style
    }
  }, shown.map((ch, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      marginLeft: i === 0 ? 0 : -size * 0.32,
      zIndex: i
    }
  }, React.cloneElement(ch, {
    size
  }))), extra > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: -size * 0.32,
      width: size,
      height: size,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--navy)',
      color: 'var(--cream)',
      border: '2px solid var(--cream)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: Math.round(size * 0.34),
      zIndex: 99
    }
  }, "+", extra));
}
function Checkbox({
  checked = false,
  onChange,
  label,
  size = 24,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer',
      userSelect: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.preventDefault();
      onChange && onChange(!checked);
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      flex: 'none',
      borderRadius: Math.round(size * 0.32),
      background: checked ? 'var(--mint)' : 'var(--surface-card)',
      border: '2.5px solid var(--navy)',
      transition: 'background .15s'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size * 0.62,
    height: size * 0.62,
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      opacity: checked ? 1 : 0,
      transition: 'opacity .12s'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 13l4 4L19 7",
    stroke: "var(--navy)",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      fontWeight: 500,
      color: 'var(--text-body)',
      textDecoration: checked ? 'line-through' : 'none',
      textDecorationColor: 'var(--ink-300)',
      opacity: checked ? 0.55 : 1
    }
  }, label));
}
function QtyStepper({
  value = 1,
  onChange,
  min = 0,
  max = 99,
  unit,
  size = 'md',
  style = {}
}) {
  const dim = size === 'sm' ? 32 : 40;
  const set = n => onChange && onChange(Math.max(min, Math.min(max, n)));
  const Btn = ({
    sign,
    onClick,
    dis
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    disabled: dis,
    style: {
      width: dim,
      height: dim,
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--surface-card)',
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      cursor: dis ? 'not-allowed' : 'pointer',
      opacity: dis ? 0.35 : 1,
      color: 'var(--navy)',
      transition: 'transform .08s'
    },
    onMouseDown: e => {
      if (!dis) e.currentTarget.style.transform = 'scale(0.86)';
    },
    onMouseUp: e => e.currentTarget.style.transform = '',
    onMouseLeave: e => e.currentTarget.style.transform = ''
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3.5",
    strokeLinecap: "round"
  }, sign === '+' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  })) : /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  })));
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 2,
      padding: 3,
      background: 'var(--surface-sunken)',
      border: '2px solid var(--navy)',
      borderRadius: 'var(--radius-pill)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    sign: "-",
    onClick: () => set(value - 1),
    dis: value <= min
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: dim,
      textAlign: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: size === 'sm' ? 16 : 19,
      color: 'var(--navy)',
      fontVariantNumeric: 'tabular-nums',
      display: 'inline-flex',
      alignItems: 'baseline',
      justifyContent: 'center',
      gap: 3
    }
  }, value, unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      color: 'var(--text-muted)'
    }
  }, unit)), /*#__PURE__*/React.createElement(Btn, {
    sign: "+",
    onClick: () => set(value + 1),
    dis: value >= max
  }));
}
function SegmentedControl({
  options = [],
  value,
  onChange,
  size = 'md',
  style = {}
}) {
  const opts = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  const h = size === 'sm' ? 36 : 44;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      padding: 4,
      background: 'var(--surface-sunken)',
      border: '2px solid var(--navy)',
      borderRadius: 'var(--radius-pill)',
      ...style
    }
  }, opts.map(o => {
    const a = o.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      onClick: () => onChange && onChange(o.value),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        height: h,
        padding: '0 18px',
        border: 'none',
        cursor: 'pointer',
        borderRadius: 'var(--radius-pill)',
        background: a ? 'var(--navy)' : 'transparent',
        color: a ? 'var(--cream)' : 'var(--text-muted)',
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: size === 'sm' ? 14 : 16,
        transition: 'background .15s, color .15s',
        whiteSpace: 'nowrap'
      }
    }, o.label, o.badge != null && /*#__PURE__*/React.createElement("span", {
      style: {
        minWidth: 18,
        height: 18,
        padding: '0 5px',
        borderRadius: 999,
        background: a ? 'var(--mint)' : 'var(--ink-100)',
        color: 'var(--navy)',
        fontSize: 11,
        fontWeight: 700,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, o.badge));
  }));
}
function Card({
  children,
  variant = 'plain',
  tone,
  padding = 'md',
  radius = 'lg',
  style = {},
  ...rest
}) {
  const pads = {
    none: 0,
    sm: '12px',
    md: '20px',
    lg: '32px'
  };
  const radii = {
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)',
    xl: 'var(--radius-xl)'
  };
  const fills = {
    red: 'var(--red-tint)',
    mint: 'var(--mint-tint)',
    indigo: 'var(--indigo-tint)',
    lilac: 'var(--lilac)'
  };
  let bg = 'var(--surface-card)',
    border = '1.5px solid var(--border-soft)',
    boxShadow = 'none';
  if (tone) bg = fills[tone] || bg;
  if (variant === 'pop') {
    border = '2.5px solid var(--navy)';
    boxShadow = 'var(--shadow-pop)';
  } else if (variant === 'sunken') {
    bg = 'var(--surface-sunken)';
  } else if (variant === 'brand') {
    bg = 'var(--red)';
    border = '2.5px solid var(--navy)';
    boxShadow = 'var(--shadow-pop)';
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: bg,
      border,
      borderRadius: radii[radius],
      boxShadow,
      padding: pads[padding],
      color: variant === 'brand' ? 'var(--cream)' : 'var(--text-body)',
      ...style
    }
  }, rest), children);
}
function CategoryChip({
  label,
  icon,
  selected = false,
  onClick,
  tone = 'indigo',
  style = {}
}) {
  const T = {
    indigo: 'var(--indigo)',
    red: 'var(--red)',
    mint: 'var(--mint)',
    lilac: 'var(--lilac-deep)'
  };
  const sel = T[tone],
    selInk = tone === 'mint' || tone === 'lilac' ? 'var(--navy)' : 'var(--cream)';
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      height: 38,
      padding: '0 16px',
      cursor: 'pointer',
      background: selected ? sel : 'var(--surface-card)',
      color: selected ? selInk : 'var(--text-body)',
      border: `2px solid ${selected ? 'var(--navy)' : 'var(--border-soft)'}`,
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 14,
      boxShadow: selected ? 'var(--shadow-pop-sm)' : 'none',
      transition: 'background .15s, transform .08s, box-shadow .08s',
      whiteSpace: 'nowrap',
      ...style
    },
    onMouseDown: e => e.currentTarget.style.transform = 'scale(0.96)',
    onMouseUp: e => e.currentTarget.style.transform = '',
    onMouseLeave: e => e.currentTarget.style.transform = ''
  }, icon != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      lineHeight: 1
    }
  }, icon), label);
}
function GroceryItem({
  name,
  note,
  checked = false,
  onToggle,
  category,
  categoryTone = 'lilac',
  addedBy,
  trailing,
  style = {}
}) {
  const tf = {
    red: 'var(--red-tint)',
    mint: 'var(--mint-tint)',
    indigo: 'var(--indigo-tint)',
    lilac: 'var(--lilac)'
  }[categoryTone] || 'var(--lilac)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 14px',
      background: 'var(--surface-card)',
      border: '1.5px solid var(--border-soft)',
      borderRadius: 'var(--radius-md)',
      opacity: checked ? 0.72 : 1,
      transition: 'opacity .15s',
      ...style
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: checked,
    onChange: onToggle,
    size: 26
  }), category != null && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
      flex: 'none',
      fontSize: 20,
      background: tf,
      borderRadius: 'var(--radius-sm)'
    }
  }, category), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--text-strong)',
      textDecoration: checked ? 'line-through' : 'none',
      textDecorationColor: 'var(--ink-300)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, name), note && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-muted)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, note)), addedBy && /*#__PURE__*/React.createElement(Avatar, {
    name: addedBy,
    size: 28
  }), trailing != null && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none'
    }
  }, trailing));
}
function ListSummaryCard({
  title,
  household,
  members = [],
  total = 0,
  done = 0,
  accent = 'red',
  onClick,
  style = {}
}) {
  const A = {
    red: 'var(--red)',
    indigo: 'var(--indigo)',
    mint: 'var(--mint)',
    lilac: 'var(--lilac-deep)'
  };
  const bar = A[accent] || A.red,
    pct = total > 0 ? Math.round(done / total * 100) : 0;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      padding: 18,
      background: 'var(--surface-card)',
      border: '2.5px solid var(--navy)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-pop)',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'transform .1s, box-shadow .1s',
      ...style
    },
    onMouseDown: e => {
      if (onClick) {
        e.currentTarget.style.transform = 'translate(2px,3px)';
        e.currentTarget.style.boxShadow = 'none';
      }
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = '';
      e.currentTarget.style.boxShadow = 'var(--shadow-pop)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = '';
      e.currentTarget.style.boxShadow = 'var(--shadow-pop)';
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--text-strong)',
      lineHeight: 1.15,
      marginBottom: 2
    }
  }, title), household && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-muted)',
      fontWeight: 600
    }
  }, household)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      borderRadius: 999,
      background: bar,
      flex: 'none',
      border: '2px solid var(--navy)',
      marginTop: 4
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 12,
      borderRadius: 999,
      background: 'var(--surface-sunken)',
      overflow: 'hidden',
      border: '1.5px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: '100%',
      background: bar,
      borderRadius: 999,
      transition: 'width .3s'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, done, "/", total, " done"), members.length > 0 && /*#__PURE__*/React.createElement(AvatarGroup, {
    size: 28,
    max: 4
  }, members.map((m, i) => /*#__PURE__*/React.createElement(Avatar, {
    key: i,
    name: m
  }))))));
}
Object.assign(window, {
  Blob,
  Button,
  IconButton,
  Badge,
  Avatar,
  AvatarGroup,
  Checkbox,
  QtyStepper,
  SegmentedControl,
  Card,
  CategoryChip,
  GroceryItem,
  ListSummaryCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/thalaja-app/ui.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarGroup = __ds_scope.AvatarGroup;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.QtyStepper = __ds_scope.QtyStepper;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Blob = __ds_scope.Blob;

__ds_ns.CategoryChip = __ds_scope.CategoryChip;

__ds_ns.GroceryItem = __ds_scope.GroceryItem;

__ds_ns.ListSummaryCard = __ds_scope.ListSummaryCard;

})();
