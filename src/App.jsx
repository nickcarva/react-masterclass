import './App.css'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/Layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/Input'
import Contador from './components/contador/Contador'
import Megasena from './components/megasena/Megasena'

export default props =>
    <div className="App">
        <h1>React Masterclass</h1>

        <div className="Cards">
            <Card titulo="#11 - Mega Sena" color="#1F0318">
                <Megasena qtdNumbers={8} />
            </Card>

            <Card titulo="#10 - Contador" color="#1a936f">
                <Contador passo={10} valor={100} />
            </Card>

            <Card titulo="#09 - Input" color="#5f0f40">
                <Input />
            </Card>

            <Card titulo="#08 - Comunicação Indireta" color="#ffe066">
                <Super />
            </Card>

            <Card titulo="#07 - Comunicação Direta" color="#ee6c4d">
                <Pai sobrenome="Freitas" />
            </Card>

            <Card titulo="#06 - Condicional v2" color="#84a98c">
                <CondicionalComIf number={101} />
            </Card>

            <Card titulo="#05 - Condicional v1" color="#e6beae">
                <Condicional number={10} />
            </Card>

            <Card titulo="#04 - Repetição" color="#b2967d">
                <Repeticao />
            </Card>

            <Card titulo="#03 - Componente com Parâmetro" color="#3d405b">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Pedro</li>
                        <li>Urana</li>
                    </ul>
                </ComFilhos>
            </Card>

            <Card titulo="#02 - Componente com Parâmetro" color="#ff1654">
                <ComParametro titulo="The Walking Dead" subtitulo="Whisperers are merciful" />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#a100f2">
                <Primeiro />
            </Card>
        </div>
    </div>