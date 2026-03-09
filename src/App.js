import React, { useState } from "react";

export default function RZPLAYCYVEM() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [logged, setLogged] = useState(false);
  const [admin, setAdmin] = useState(false);

  function login() {
    if(user === "admin" && password === "1234"){
      setAdmin(true);
      setLogged(true);
    } else if(user !== "" && password !== ""){
      setLogged(true);
    } else {
      alert("Preencha usuário e senha");
    }
  }

  if(!logged){
    return(
      <div style={styles.login}>
        <h1>RZPLAYCYVEM</h1>

        <input
        placeholder="Usuário"
        onChange={(e)=>setUser(e.target.value)}
        />

        <input
        type="password"
        placeholder="Senha"
        onChange={(e)=>setPassword(e.target.value)}
        />

        <button onClick={login}>Entrar</button>
      </div>
    )
  }

  return(
    <div style={styles.app}>
      <h2>Bem-vindo ao RZPLAYCYVEM</h2>

      {admin && (
        <div style={styles.admin}>
          <h3>Painel do Criador</h3>
          <button>Adicionar Filme</button>
          <button>Remover Filme</button>
        </div>
      )}

      <div style={styles.catalogo}>
        <h3>Plataformas Inspiradas</h3>
        <div style={styles.cards}>
          <div style={styles.card}>Netflix</div>
          <div style={styles.card}>Prime Video</div>
          <div style={styles.card}>Disney+</div>
          <div style={styles.card}>HBO Max</div>
        </div>
      </div>

      <div style={styles.planos}>
        <h3>Planos</h3>

        <div style={styles.plano}>
          Kidz — R$5 / mês
        </div>

        <div style={styles.plano}>
          Diamante — R$10 / mês
        </div>

        <div style={styles.plano}>
          Mestre — R$20 / mês
        </div>

        <div style={styles.plano}>
          Elite — R$30 / mês
        </div>
      </div>

    </div>
  )
}

const styles = {

login:{
background:"#000",
color:"#fff",
height:"100vh",
display:"flex",
flexDirection:"column",
alignItems:"center",
justifyContent:"center",
gap:"10px"
},

app:{
background:"#111",
color:"#fff",
minHeight:"100vh",
padding:"20px"
},

cards:{
display:"flex",
gap:"10px"
},

card:{
background:"#333",
padding:"20px",
borderRadius:"10px"
},

planos:{
marginTop:"30px"
},

plano:{
background:"#0a8f3d",
margin:"5px",
padding:"10px",
borderRadius:"8px"
},

admin:{
background:"#222",
padding:"10px",
marginBottom:"20px"
}
}