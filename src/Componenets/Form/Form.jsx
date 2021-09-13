import { FormWrapper } from "./FormStyled";

const Form = function ({
  name,
  number,
  handleChangeInput,
  handleSubmit,
  nameButton,
  onHandleClose,
}) {
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <label>
        Name
        <input
          className="input"
          onChange={handleChangeInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          value={name}
          placeholder="Name"
          required
        />
      </label>
      <label>
        Number
        <input
          className="input"
          onChange={handleChangeInput}
          value={number}
          type="tel"
          name="number"
          placeholder="Number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button type="submit" className="buttonSubmit">
        {nameButton}
      </button>
      <button type="button" className="buttonClose" onClick={onHandleClose}>
        Close
      </button>
    </FormWrapper>
  );
};

export default Form;
