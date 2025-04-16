function Button(props) {
  return (
    <button className="font-plex-mono font-medium cursor-pointer border border-gray-200 rounded-lg px-3.5 py-2 active:bg-gray-100 hover:bg-gray-50">
      {props.label ? props.label : "BUTTON"}
    </button>
  );
}

export default Button;
