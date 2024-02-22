
const User = ({user}) => {
    const {name, age, gender, color} = user;
    // console.log(user.name);
    return (
        <div className="border-2 border-cyan-500 rounded p-4 shadow-xl">
            <h2>My name is {name}</h2>
            <p>I am {age} years old</p>
            <p>i am {gender}</p>
            <p>My color is {color}</p>
        </div>
    );
};

export default User;