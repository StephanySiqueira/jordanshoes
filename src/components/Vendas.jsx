import'./Vendas.scss'

export default function Vendas(){

    return(
    <>
        <nav>
            <div className="menu">
                <p>Ganhe R$ 10,00 de desconto no frete</p>
            </div>
        </nav>
        <section>
            <div className='semiTitulo'>
                <p>JordanShoes</p>
            </div>
            <div className='container1'>
                <link rel="stylesheet" href="Vendas.scss" />
                <div className='text'>
                    <h3>A melhor loja de Jordan</h3>
                    <p>O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.</p>
                </div>
            </div>
        </section>
        <main>
            <div className='containerMain'>
                <div className='textMain'>
                    <h2>Destaques</h2>
                    <p>Frete grátias e chinelo de brinde é aqui, aproveite por tempo limitado</p>
                </div>
                <div className='cardsMain'>
                    <div className='card'>
                        <img src="/public/1.png" alt="" />
                    </div>
                    <div className='card'>
                        <img src="/public/2.png" alt="" />
                    </div>
                    <div className='card'>
                        <img src="/public/3.png" alt="" />
                    </div>
                    <div className='card'>
                        <img src="/public/4.png" alt="" />
                    </div>
                    <div className='card'>
                        <img src="/public/5.png" alt="" />
                    </div>
                    <div className='card'>
                        <img src="/public/6.png" alt="" />
                    </div>
                    <div className='card'>
                        <img src="/public/7.png" alt="" />
                    </div>
                    <div className='card'>
                        <img src="/public/8.png" alt="" />
                    </div>
                </div>
            </div>
        </main>
        <footer>
            <div className='footer'>
                <p>Todos os direitos reservados.</p>
            </div>
        </footer>
    </>

    )
}