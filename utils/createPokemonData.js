const capitalizeName = name => name.charAt(0).toUpperCase() + name.slice(1);
const concatTypes = types =>
  types.reduce(
    (prev, { type }) => (prev.length ? prev + "/" + type.name : type.name),
    ""
  );
