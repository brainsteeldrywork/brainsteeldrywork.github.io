import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from "yup"
import "../styles/formStyles.css"
import { useForm } from '@formspree/react';
// 
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

let schema = yup.object().shape({

    email: yup.string().email("Verifique o Email Informado").required("Nao esqueca o Email"),
    phoneNumber: yup.string().required("Telefone Nao Informado").matches(
        /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}-?[0-9]{4}$/,
        "Verifique o Numero Informado"
    ),
    projetoSelect: yup.array().required().min(1, "Seleciona Uma Das Opcoes"),
    mensagem: yup.string().required("Conte Sobre O Que Precisa"),
    name: yup.string().required("Nos Diga Qual Sua Graca")
});


const CheckboxExample = () => {

    const [state, handleSubmit] = useForm("meqdgypl");

    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    return (

        <>
            <h1 className='h1'>Contato</h1>
            <div className='formContainer'>

                <Formik

                    validationSchema={schema}

                    initialValues={{
                        name: "",
                        projetoSelect: [],
                        email: "",
                        phoneNumber: "",
                        mensagem: ""
                    }}

                    onSubmit={async values => {
                        console.log("submiting...")
                        await sleep(1000);
                        alert(JSON.stringify(values, null, 2));
                        handleSubmit(values)
                    }
                    }
                >
                    {({ isSubmitting }) => (

                        <Form >

                            <h1>Solicite Seu Orcamento</h1>

                            <div className='subForm' >

                                <div style={{ display: "flex", flexDirection: "column" }} >
                                    <label htmlFor="name">Nome</label>
                                    <Field className="input" type="text" name="name" placeholder="Digite Seu Nome" />
                                    <div>
                                        <ErrorMessage className='ErrorMessage' name="name" component="label" />
                                    </div>
                                </div>

                                <div style={{ display: "flex", flexDirection: "column" }} >
                                    <label htmlFor="email">Email</label>
                                    <Field className="input" type="email" name="email" placeholder="Digite Seu Email" />
                                    <div>
                                        <ErrorMessage className='ErrorMessage' name="email" component="label" />
                                    </div>
                                </div>

                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <label htmlFor="phoneNumber">Telefone</label>
                                    <Field className="input" type="text" name="phoneNumber" placeholder="Digite Seu telefone" />
                                    <div>
                                        <ErrorMessage className='ErrorMessage' name="phoneNumber" component="label" />
                                    </div>
                                </div>

                                <div style={{ display: "flex" }}>
                                    <label htmlFor="projetoSelect">Possui Projeto ?</label>
                                    <div>
                                        <label>
                                            <Field type="checkbox" name="projetoSelect" value="Sim" />
                                            Sim
                                        </label>
                                        <label>
                                            <Field type="checkbox" name="projetoSelect" value="Nao" />
                                            Nao
                                        </label>
                                    </div>
                                </div>
                                <ErrorMessage className='ErrorMessage' name="projetoSelect" component="label" />

                                <div>
                                    <label htmlFor="mensagem"></label>
                                    <Field as="textarea" name="mensagem" placeholder="Conte um Pouco Sobre a Obra" className="textArea" />
                                    <div>
                                        <ErrorMessage className='ErrorMessage' name="mensagem" component="label" />
                                    </div>
                                </div>

                                {/*
           You do not _need_ to use <Field>/useField to get this behavior, 
           using handleChange, handleBlur, and values works as well. 
          */}
                                {/* <label>
            <input
              type="checkbox"
              name="projetoSelect"
              value="founder"
              checked={values.projetoSelect.includes('founder')}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            CEO / Founder
          </label> */}


                                {/* Here's how you can use a checkbox to show / hide another field */}
                                {/* {!!values.terms ? (
            <div>
              <label>
                <Field type="checkbox" name="newsletter" />
                Send me the newsletter <em style={{ color: 'rebeccapurple' }}>
                  (This is only shown if terms = true)
                </em>
              </label>
            </div>
          ) : null} */}

                                <div className='button'>
                                    <button type="submit" value="Submit" disabled={isSubmitting}>
                                        Enviar
                                    </button>
                                </div>

                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
            <div className='contato'>
                <h1>Fale Conosco</h1>
                <div>
                    <h3>11 9 5555-5555</h3>
                    <p>Central De Atendimento</p>
                </div>
            </div>
        </>
    )
};

export default CheckboxExample;