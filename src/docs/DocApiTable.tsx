import styles from "./docs.module.css";

export type ApiRow = {
  name: string;
  type: string;
  defaultValue?: string;
  description: string;
};

export function DocApiTable({ rows }: { rows: ApiRow[] }) {
  return (
    <table className={styles.apiTable}>
      <thead>
        <tr>
          <th>Prop</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.name}>
            <td>{row.name}</td>
            <td className={styles.apiType}>{row.type}</td>
            <td>{row.defaultValue ?? "—"}</td>
            <td>{row.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
