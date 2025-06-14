import React from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";

export default function Animals({
  animals,
  title,
  onDelete,
  onAdoptToggle,
  onEditImage,
  nopets,
}) {
  if (animals.length === 0) return <h2>{nopets}</h2>;
  console.log(animals);

  return (
    <div>
      <h2>{title}</h2>
      <ListGroup>
        {animals.map((animal) => (
          <ListGroup.Item
            key={animal.id}
            className="pets"
          >
            <div className="flex gap-5">
              <div>
                <div className="avatar w-[100px] h-[100px]">
                  <Image
                    className="rounded-full w-full"
                    src={animal.imageUrl}
                    alt={animal.name}
                    rounded
                    fluid
                    width={100}
                  />
                </div>
                <Button
                  className="w-100 petBtn"
                  size="sm"
                  variant="light"
                  onClick={() => onEditImage(animal)}
                >
                  Edit
                </Button>
              </div>
              <div className="flex flex-column justify-content-between">
                <div>
                  <strong>{animal.name}</strong> - {animal.species}, age{" "}
                  {animal.age}
                </div>

                <div>
                  <div className="pInfo">
                    {animal.kidFriendly && "Kid Friendly"}
                    {!animal.kidFriendly && "Not Kid Friendly"}
                  </div>
                  <div className="pInfo">
                    {animal.vaccinated && "Vaccinated"}
                    {!animal.vaccinated && "Not Vaccinated"}
                  </div>
                </div>
                <div>
                  <Button
                    className="petBtn"
                    size="sm"
                    onClick={() => onAdoptToggle(animal)}
                  >
                    {animal.adopted && "Make Available"}
                    {!animal.adopted && "Adopt"}
                  </Button>
                  <Button
                    className="petBtn"
                    onClick={() => onDelete(animal.id)}
                    variant="danger"
                    size="sm"
                  >
                    🗑️
                  </Button>
                </div>
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
