import React, { useEffect, useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosEntrega from "./DadosEntrega";
import DadosUsuario from "./DadosUsuario";
import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";

function FormularioCadastro({aoEnviar, validacoes}) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const formularios = [
  <DadosUsuario aoEnviar={coletarDados} validacoes={validacoes} />, 
  <DadosPessoais aoEnviar={coletarDados} validacoes={validacoes} />,
  <DadosEntrega aoEnviar={coletarDados} validacoes={validacoes} />,
  <Typography variant="h5">Obrigado pelo cadastro!</Typography>
  ];
  const [dadosColetados, setDados] = useState({});
  
  useEffect(() => {
    if(etapaAtual === formularios.length - 1) {
      aoEnviar(dadosColetados);
    }
  })

  function coletarDados(dados) {
    setDados({...dadosColetados, ...dados});
    proximo();
  }

  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }
  
  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Pessoal</StepLabel></Step>
        <Step><StepLabel>Entrega</StepLabel></Step>
        <Step><StepLabel>Finalização</StepLabel></Step>
      </Stepper>
      {formularios[etapaAtual]}
    </>
  )

}

export default FormularioCadastro;