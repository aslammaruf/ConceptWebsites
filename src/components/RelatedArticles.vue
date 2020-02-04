<template>
    <section id="Rel_Articles">
        <div class="wrapper">
            <h1 class="section_title">Related Articles</h1>
            
            <div class="contents">
                <div class="col3">
                    <div class="img_1 square_img" />
                    <h2>New tax rules herald EV sales boom</h2>
                    <h3>The electric car revolution is poised to hit the UK this year, but not because of purchase grants, green-shaming or European Union regulations.</h3>
                    <a href="#">Read More &#8594;</a>
                </div>
                <div class="col3">
                    <div class="img_2 square_img" />
                    <h2>New Mercedes C-Class prepares for 2021 launch</h2>
                    <h3>The new Mercedes C-Class has been spied in more detail during winter testing, with the BMW 3 Series, Audi A4 and Jaguar XE rival due in 2021</h3>
                    <a href="#">Read More &#8594;</a>
                </div>
                <div class="col3">
                    <div class="img_3 square_img" />
                    <h2>Skoda plots 30 new models by 2022</h2>
                    <h3>Czech firm wants to sell two million cars per year by end of the decade</h3>
                    <a href="#">Read More &#10230;</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'rel_articles',
}
</script>

<style scoped lang="scss">
#Rel_Articles{
    padding-bottom: 100px;
}
.section_title{
    color: #363636;
    font-weight: bolder;
    font-size: 2em;
}

.contents{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

.col3{
    padding: 2rem;
    letter-spacing: 0;

    .square_img{
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;

        position: relative;
        width: 100%;
        padding-bottom: 100%;
    }

    .img_1{background-image: url("../assets/five-assorted-color-cars-parked-inside-room-1231643.jpg");}
    .img_2{background-image: url("../assets/photography-of-a-blue-mercedes-benz-5-door-hatchback-810357.jpg");}
    .img_3{background-image: url("../assets/auto-car-cold-driving-376361.jpg");}

    h2{
        color: #363636;
        font-weight: bolder;
        font-size: 1.4em;
        line-height: 1.4em;
        padding-top: 20px;
        height: 75px;
    }

    h3{
        font-size: 1em;
        height: 120px;
    }

    a{
        text-decoration: none;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 0.7em;
        
    }
}
</style>
