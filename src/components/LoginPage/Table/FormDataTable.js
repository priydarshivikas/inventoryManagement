const FormDataTable = ({ formDataList }) => {
    return (
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {formDataList.map((formData, index) => (
            <tr key={index}>
              <td>{formData.firstName}</td>
              <td>{formData.lastName}</td>
              <td>{formData.email}</td>
              <td>{formData.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
export default FormDataTable;  