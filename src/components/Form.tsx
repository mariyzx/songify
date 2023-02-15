function Form() {
  return (
    <form>
      <label htmlFor="email">
        Email:
        <input type="email" name="email" id="email" />
      </label>
      <label htmlFor="password">
        Password:
        <input type="password" name="password" id="password" />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}

export default Form;
