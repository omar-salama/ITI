export default function RegisteredUsers(props) {
  if (props.users.length === 0) {
    return <h4 className="mt-4">No registered users</h4>;
  }
  return (
    <table className="table mt-4">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map((user) => (
          <tr>
            <td>{user.name}</td>
            <td>{user.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
