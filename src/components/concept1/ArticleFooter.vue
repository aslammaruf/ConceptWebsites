<template>
    <section id="article_tags">
      <div class="wrapper tags">
          <ul>
              <li>CAR</li>
              <li>audi</li>
              <li>other</li>
              <li>sponsered</li>
              <li>top gear</li>
          </ul>
          <div class="content-author">
            <img src="@/assets/author.jpeg" />
            <div class="content">
              <h1>John Smith</h1>
              <h2>Head Editor</h2>
            </div>
          </div> 
        </div>
    </section>
</template>

<script>
export default {
  name: 'articletags',
}
</script>

<style scoped lang="scss">
#article_tags{
  padding: 2rem;
  padding-bottom: 4rem;

  .tags{
    display: grid;
    grid-template-columns: 70% 30%;
  }
}

ul{
  align-self: center;
}

li{
  display: inline;
  text-transform: uppercase;
  background: #eee;
  color: grey;
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 0.6em;
  font-weight: bolder;
}

.content-author{
  width: 200px;
  display: grid;
  grid-template-columns: 30% 70%;
  background: white;
  padding: 10px 30px;
  box-shadow: 1px 5px 20px rgba(0,0,0,0.2);
  border-radius: 5px;

  img{
    width: 40px;
    height: 40px;
    border-radius: 20px;
    align-self: center;
  }

  .content{
    align-self: center;
    font-weight: bolder;
  }

  h1{
    letter-spacing: 0.5px;
  }

  h2{
    font-size: 0.5em;
    color: #1da1f2;
    text-transform: uppercase;
  }
}
</style>
