export default function Members(arg) {
  console.log(arg);
  return (
    <div>
      {/* <p className="myName">Amanuel Addisu</p>
      <p>Afomia Dugassa</p>
      <p>Agumas Desalew</p>
      <p>Alem Ayalew Yimer</p>
      <p>Amanuel Mandefrow Reta</p>
      <p>AMMAR MOHAMMED YASIN</p>
      <p>Andinet Dereje</p>
      <p>Anteneh Addisu</p>
      <p>Anteneh Getnet Tirfu</p>
      <p>Ariyam Yilma Eshete</p> */}
      <p>{arg.data.name}</p>
    </div>
  );
}
