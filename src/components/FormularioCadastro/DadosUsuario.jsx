import React, {useState} from "react";
import { TextField, Button } from "@material-ui/core";

function DadosUsuario ({aoEnviar, validacoes}) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erros, setErros] = useState({senha:{valido:true, texto:""}});

    function validarCampos(event) {
        const {name, value} = event.target;
        const novoEstado = {...erros}
        const ehValido = validacoes[name](value);
        novoEstado[name] = ehValido;
        setErros(novoEstado);
    }

    function possoEnviar() {
        for(let campo in erros) {
           if(!erros[campo].valido) {
            return  false;
           }
        }

        return true;
    }

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if(possoEnviar()) {
                aoEnviar({email, senha});
            }
        }}>
           <TextField 
           onChange={(event) => setEmail(event.target.value)}
           value={email}
           id="email" 
           label="email" 
           type="email" 
           variant="outlined"
           margin="normal"
           name="email" 
           fullWidth
           required
           />
           <TextField 
           onChange={(event) => setSenha(event.target.value)}
           onBlur={validarCampos}
           error={!erros.senha.valido}
           helperText={erros.senha.texto}
           value={senha}
           id="senha" 
           label="senha" 
           type="password" 
           variant="outlined"
           margin="normal" 
           name="senha"
           fullWidth
           required
            />
           <Button 
           type="submit"  
           variant="contained" 
           color="primary">
            Próximo
           </Button>
        </form>
    )
}

export default DadosUsuario;