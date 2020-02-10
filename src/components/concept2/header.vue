<template>
    <section id="header">
        <div class="overlay">
            <div class="contents">
                <div class="border">
                

                    <div class="links-social">
                        <ul>
                            <li>Fb</li>
                            <li>In</li>
                            <li>Tw</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'header',
}
</script>

<style scoped lang="scss">
    
#header{
    background: url('../../assets/concept2bg.jpg');
    background-size: cover;
    width: 100%;
    height: 100vh;

    .overlay{
        box-sizing: border-box;
        background: black;
        width: 100%;
        height: 100%;
        opacity: 0.7;
        padding: 50px;
    }

    .contents{
        position: relative;
        border: 2px solid white;
        width: 100%;
        height: 100%;
    }
}


</style>
