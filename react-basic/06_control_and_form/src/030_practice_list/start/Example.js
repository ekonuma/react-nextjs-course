import Profile from "./components/Profile";

const Example = () => {
  const geo = { name: "Geo", age: 18, hobbies: ["sports", "music"] };
  const tom = { name: "Tom", Age: 25, hobbies: ["movie", "music"] };
  const lisa = { name: "Lisa", age: 21, hobbies: ["sports", "travel", "game"] };
  return (
    <>
      <ul>
        {[geo, tom, lisa].map((profile) => (
          <li key={profile.name}>
            <Profile {...profile} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Example;
