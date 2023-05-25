import React, {useState} from "react";
import { TextField, Button } from "@material-ui/core";
function DadosEntrega ({aoEnviar}) {

    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");

    return (
        <form onSubmit={
            (event) => {
               event.preventDefault();
            aoEnviar({cep, endereco, numero, estado, cidade})
            }
        }>
            <TextField 
           onChange={(event) => setCep(event.target.valueAsNumber)}
           value={cep}
           id="cep" 
           label="cep" 
           type="number" 
           variant="outlined"
           margin="normal" 
           />
           <TextField 
           onChange={(event) => setEndereco(event.target.valueAsNumber)}
           value={endereco}
           id="endereço" 
           label="endereço" 
           type="text" 
           variant="outlined"
           margin="normal" 
           fullWidth/>
           <TextField 
           onChange={(event) => setNumero(event.target.valueAsNumber)}
           value={numero}
           id="número" 
           label="número" 
           type="number" 
           variant="outlined"
           margin="normal" 
           />
           <TextField 
           onChange={(event) => setEstado(event.target.valueAsNumber)}
           value={estado}
           id="estado" 
           label="estado" 
           type="text" 
           variant="outlined"
           margin="normal" 
           fullWidth/>
           <TextField 
           onChange={(event) => setCidade(event.target.valueAsNumber)}
           value={cidade}
           id="cidade" 
           label="cidade" 
           type="text" 
           variant="outlined"
           margin="normal" 
           fullWidth/>
           <Button 
           type="submit"  
           variant="contained" 
           color="primary"
           fullWidth>
            Finalizar cadastro
           </Button>
        </form>
    )
}

export default DadosEntrega;