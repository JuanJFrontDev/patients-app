import logo from '../../assets/img/Patient_Care_Logo.png';

export const NavBar = () => {
  return (
    <div className="container">
        <nav>
            <span>
              <img src={logo} alt="Logo Image" />
            </span>
            <ul>
                <li>First Link</li>
                <li>Second Link</li>
                <li>Third Link</li>
                <li>Fourth Link</li>
                <li>Fifth Link</li>
            </ul>
        </nav>
    </div>
  )
}
