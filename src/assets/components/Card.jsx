import "./card.scss"


const Card = ({name, username, email, street, city, phone, company}) => {
    
  return (
    <table>
    

    <tbody>
        <tr>
            <td>{name}</td>
            <td>{username}</td>
            <td><a href="mailto:{email}">{email}</a></td>
            <td><a href="tel:{phone}">{phone}"</a></td>
            <td><address>{street}, {city}</address></td>
            <td><b>{company}</b></td>
        </tr>
    </tbody>
</table>
  )
}

export default Card