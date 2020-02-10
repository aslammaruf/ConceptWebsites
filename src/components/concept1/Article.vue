<template>
    <section id="article">
        <div class="wrapper">
            <div class="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse finibus eros quis est facilisis posuere. Suspendisse dictum venenatis convallis. Donec vestibulum suscipit consequat. Nunc sagittis euismod justo, vel aliquam nibh laoreet eu. Nulla neque lorem, ullamcorper sed velit vitae, finibus sagittis dui. Cras in nulla cursus nisi pellentesque aliquam. Nam nisi ligula, finibus quis dolor in, mattis pretium ex. Aliquam non nisl lacinia, accumsan nunc eget, hendrerit leo. Quisque ut metus ut nibh suscipit tincidunt. Pellentesque venenatis elit eget consectetur consectetur. Cras justo nisi, scelerisque varius mattis a, mattis sit amet erat. Vestibulum quis nunc placerat, mattis massa eget, laoreet turpis. Sed congue ac nisi eget finibus. Pellentesque imperdiet ligula consequat, auctor leo ac, aliquet metus. Proin id quam nisl.</p>
                <div class="quote">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse finibus eros quis est facilisis posuere. Suspendisse dictum venenatis convallis.</p>
                    <div class="quote-author">
                        <p>TW</p>
                        <p>lionofnarnia</p>
                    </div>
                </div>
                <p>
                    Quisque rhoncus luctus quam, vel cursus nisi semper ut. Duis fermentum sapien id sapien mollis, ut feugiat erat volutpat. Vestibulum pharetra euismod sem, eu consequat dui interdum vel. Nulla at quam sed velit aliquam tempor. Nulla vel elit ut arcu consequat sagittis. Ut condimentum ipsum sed lectus rutrum varius nec at sem. Integer in convallis odio. Duis laoreet nisl sed scelerisque malesuada.
                </p><p>
                    Maecenas congue posuere sem id tincidunt. Curabitur sodales est dolor, a sagittis purus auctor eu. Nam euismod ipsum tristique dolor mattis mattis. Integer arcu tellus, volutpat in leo non, luctus euismod est. Ut condimentum sagittis tristique. Duis dictum ex quis ex fringilla, eu fermentum nibh auctor. Donec ultricies interdum neque vitae faucibus. Pellentesque et volutpat mauris. Aliquam iaculis massa nec sem tempor mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus convallis justo eu ex ultricies, eu aliquam urna cursus. Aenean efficitur congue lacus sed sodales. Praesent vitae accumsan eros. Proin eget lacus lacus. Etiam viverra enim est, in hendrerit eros ornare eu. In luctus sodales sem.
                </p><p>
                    Sed sodales odio sit amet vehicula viverra. Nunc cursus sit amet nisi vel tempor. Donec quam nulla, dapibus sit amet mauris in, sodales blandit ante. Nam quis justo placerat odio scelerisque scelerisque. Vestibulum hendrerit odio a erat vestibulum ornare. Suspendisse potenti. Vestibulum nec enim et ipsum viverra ultrices vitae euismod turpis. Proin blandit augue ac tristique iaculis. Integer diam magna, dapibus nec feugiat nec, mattis a eros. Aenean viverra risus ac tristique elementum.
                </p><p>
                    Sed commodo mollis quam, sed eleifend felis finibus in. Phasellus volutpat porta libero, id sodales lorem sagittis et. Nunc nec turpis nec est scelerisque tincidunt sed ut sem. Sed eu odio non nunc lobortis congue ac feugiat felis. Integer sed diam tempus, malesuada quam eu, mattis tortor. Morbi nibh odio, blandit quis dolor at, aliquet aliquet lorem. Quisque pretium ac sapien non bibendum. Aliquam ultrices, nulla consectetur interdum ornare, lectus ante sodales nulla, ut ullamcorper nibh sem id lacus. Praesent eu metus ultrices, sodales orci ut, sollicitudin ligula. Praesent porttitor tempor scelerisque. Aliquam in velit non ante rhoncus commodo id id purus. Nunc elit arcu, eleifend at finibus et, pellentesque sollicitudin magna. Phasellus sit amet est finibus, feugiat neque eget, posuere lacus.
                </p>
            </div>
            <div class="sidebar">
                <div class="share-btns">
                    <p>share</p>
                    <span></span>
                    <ul>
                        <li class="fb">F</li>
                        <li class="tw">T</li>
                        <li>L</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Article',
}
</script>

<style scoped lang="scss">
#article{
    padding: 2rem;
    text-align: justify;

    .content > p{
        padding: 2rem 0;
    }
}

.wrapper{
    display: grid;
    grid-template-columns: 90% 10%;
}

.quote{
    display: block;
    color: #1da1f2;


    p{
        font-style: italic;
        font-size: 1.2em;
    }

    .quote-author{
        p{
            display: inline-block;
            font-size: 0.8em;
            color: grey;
            font-weight: bold;
            padding: 10px 20px;
        }
    }
}

.sidebar{
    justify-self: right;
    align-self: flex-end;

    p{
        text-align: center;
        margin: auto;
        writing-mode: vertical-rl;
        text-orientation: mixed;
        text-transform: uppercase;
        font-size: 0.7em;
        font-weight: bolder;
        color: grey;
    }

    span{
        display:block;
        width: 2px;
        height: 50px;
        background: lightgrey;
        margin: 20px auto;
    }

    ul{
        li{
            border-radius: 30px;
            border: 2px solid lightgrey;
            width: 30px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            color: grey;   
            font-size: 0.7em;
            margin: 10px 0;
            transition: 1s;
        }
    }
}

.fb:hover{
    background: #3b5998;
    color: white;
    transition: 1s;
    border-color: white;
}

.tw:hover{
    background: #1da1f2;
    color: white;
    transition: 1s;
    border-color: white;
}

</style>
