import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function AnimalModal({ show, onHide, form, onChange, onSave }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
    >
      <Modal.Dialog>
        <Modal.Header
          closeButton
          className="pets"
        >
          <Modal.Title>Add New Animal</Modal.Title>
        </Modal.Header>

        <Modal.Body className="pets pInfo">
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                value={form.name}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="formSpecies">
              <Form.Label>Species</Form.Label>
              <Form.Control
                name="species"
                value={form.species}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="formAge">
              <Form.Label>Age</Form.Label>
              <Form.Control
                name="age"
                value={form.age}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="formImageUrl">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                name="imageUrl"
                value={form.imageUrl}
                onChange={onChange}
                placeholder="optional"
              />
            </Form.Group>
            <Form.Group controlId="kidFriendlyForm">
              <Form.Check
                type="checkbox"
                label="Kid Friendly"
                name="kidFriendly"
                checked={form.kidFriendly}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="vaccinatedForm">
              <Form.Check
                type="checkbox"
                label="Vaccinated"
                name="vaccinated"
                checked={form.vaccinated}
                onChange={onChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer className="pets">
          <Button
            className="petBtn"
            onClick={onHide}
          >
            Cancel
          </Button>
          <Button
            className="petBtn"
            onClick={onSave}
          >
            Save Animal
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}
