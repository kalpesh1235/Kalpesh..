function Settings() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Settings</h2>

      <label>
        Theme:
        <select>
          <option>Light</option>
          <option>Dark</option>
        </select>
      </label>

      <br /><br />

      <label>
        Resume Font:
        <select>
          <option>Arial</option>
          <option>Calibri</option>
          <option>Times New Roman</option>
        </select>
      </label>

      <br /><br />

      <button>Save Settings</button>
    </div>
  );
}

export default Settings;




