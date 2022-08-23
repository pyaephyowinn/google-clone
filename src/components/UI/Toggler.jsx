const Toggler = () => {
  // const onToggleDarkModeChange = (e) => {
  //   console.log(e.target.checked);
  // };

  return (
    <div className="w-fit">
      <input
        type="checkbox"
        // onChange={onToggleDarkModeChange}
        className="toggle"
        name="theme"
        id="themeInput"
      />
      <label htmlFor="themeInput"></label>
    </div>
  );
};
export default Toggler;
