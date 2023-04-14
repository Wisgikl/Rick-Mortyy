import Card from "./Card";
export default function Cards({characters, onClose,id}) {
  
  return (
    <div>
      {characters.map((characters, index) => {
        return (
          <Card
            key={index}
            id={characters.id}//Puede que no vaya
            name={characters.name}
            status={characters.status}
            species={characters.species}
            gender={characters.gender}
            origin={characters.origin.name}
            image={characters.image}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
}