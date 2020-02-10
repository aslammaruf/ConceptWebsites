<template>
    <section id="footer">
        <div class="upper-footer">
            <div class="wrapper">
                <h1>Join our newsletter, to receive monthly offers and information</h1>
                <input placeholder="Enter your e-mail address">
                <button>Join now &#10230;</button>
            </div>
        </div>
        <div class="lower-footer-section">
            <div class="wrapper">
                <h1>LogoIpsum</h1>
            </div>
            <div class="wrapper lower-footer">
                <div class="info">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p class="phone-number">+44 01234 56789</p>
                    <ul>
                        <li>F</li>
                        <li>T</li>
                        <li>L</li>
                    </ul>
                </div>
                <div class="info2">
                    <p>Other Links</p>
                    <ul>
                        <li>Blog</li>
                        <li>Sitemap</li>
                        <li>Terms and Conditions</li>
                        <li>Cookies</li>
                    </ul>
                </div>
                <div class="info3">
                    <p>Other Posts</p>
                    <ul>
                        <li>New 2020 Renault Megane facelift adds plug-in hybrid power</li>
                        <li>New Volkswagen ID.3 R to feature ID.R battery technology</li>
                        <li>Ghost broker car insurance scams on the rise, investigators warn</li>
                    </ul>
                </div>
            </div>
            <div class="FooterDetails">
                <p>{c} Copyright 2020. LogoIpsum Ltd</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'footerComponent',
}
</script>

<style scoped lang="scss">
.upper-footer{
    padding: 4rem;
    text-align: center;
    color: white;
    background: #1c1c1c;

    h1{
        color: white;;
        font-weight: bolder;
        font-size: 2em;
        padding-bottom: 1em;
    }

    input{
        margin: 0.5em;
        padding: 20px;
        width: 500px;
        background: #1c1c1c;
        border: 2px solid grey;
        color: grey;
        font-weight: bold;
    }

    button{
        margin: 0.5rem;
        padding: 20px;
        width: 200px;
        background: #1c1c1c;
        border: 2px solid #1da1f2;
        color: #1da1f2;
        font-weight: bold;
        text-transform: uppercase;
    }
}

.lower-footer-section{
    padding: 2rem;
    background: #0c0c10;
    color: grey;

    h1{
            color: white;
            padding-bottom: 20px;
            font-size: 2em;
        }
    .lower-footer{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }

    .info{
       

        p{
            margin-right: 20px;
        }

        .phone-number{
            color: #1da1f2;
            font-weight: bold;
            padding-top: 10px; 
            padding-bottom: 50px;
        }

        ul{
            li{
                display: inline-block;
                background: #1c1c1c;
                border-radius: 30px;
                width: 30px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                color: white;   
                font-size: 0.7em;
                margin: 5px; 
                
                &:first-child{
                    margin-left: 0;
                }
            }
        }
    }

    .info2, .info3{
        font-size: 0.9em;

        p{
            color: white;
        }

        ul{
            li{
                padding: 10px 0;
            }
        }
    }
}


.FooterDetails{
    background: #0c0c10;
    font-size: 0.7em;

    p{
        padding: 2rem;
        text-align: center;
    }


}
</style>
