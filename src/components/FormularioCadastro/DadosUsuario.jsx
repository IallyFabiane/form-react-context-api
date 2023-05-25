import React, {useState} from "react";
import { TextField, Button } from "@material-ui/core";

function DadosUsuario ({aoEnviar}) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            aoEnviar({email, senha});
        }}>
           <TextField 
           onChange={(event) => setEmail(event.target.value)}
           value={email}
           id="email" 
           label="email" 
           type="email" 
           variant="outlined"
           margin="normal" 
           fullWidth
           required
           />
           <TextField 
           onChange={(event) => setSenha(event.target.value)}
           value={senha}
           id="senha" 
           label="senha" 
           type="password" 
           variant="outlined"
            margin="normal" 
            fullWidth
            required
            />
           <Button 
           type="submit"  
           variant="contained" 
           color="primary">
            Cadastrar
           </Button>
        </form>
    )
}

export default DadosUsuario;