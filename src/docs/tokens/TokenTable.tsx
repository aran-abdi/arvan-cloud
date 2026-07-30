import type { TokenEntry } from "./registry";
import styles from "../docs.module.css";

function TokenPreview({ token }: { token: TokenEntry }) {
  if (token.kind === "color") {
    return (
      <span
        className={styles.tokenSwatch}
        style={{ background: `var(${token.name})` }}
        title={token.value}
        aria-hidden
      />
    );
  }

  if (token.kind === "shadow") {
    return (
      <span
        className={styles.tokenShadowPreview}
        style={{ boxShadow: `var(${token.name})` }}
        aria-hidden
      />
    );
  }

  if (token.kind === "size" && /^\d+(\.\d+)?px$/.test(token.value)) {
    const px = Number.parseFloat(token.value);
    const isHeightLike =
      token.name.includes("height") ||
      token.name.includes("size") ||
      token.name.endsWith("-width");

    return (
      <span className={styles.tokenValuePreview} aria-hidden>
        <span
          className={styles.tokenSizeBar}
          style={
            isHeightLike
              ? {
                  width: `${Math.min(px, 48)}px`,
                  height: `${Math.min(Math.max(px, 4), 28)}px`,
                }
              : { width: `${Math.min(px, 48)}px` }
          }
        />
      </span>
    );
  }

  return <span className={styles.tokenValuePreview}>—</span>;
}

export function TokenTable({ tokens }: { tokens: readonly TokenEntry[] }) {
  return (
    <table className={styles.apiTable}>
      <thead>
        <tr>
          <th>Token</th>
          <th>Value</th>
          <th>Preview</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {tokens.map((token) => (
          <tr key={token.name}>
            <td className={styles.apiType}>{token.name}</td>
            <td>
              <code className={styles.tokenValue}>{token.value}</code>
            </td>
            <td>
              <TokenPreview token={token} />
            </td>
            <td>{token.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
