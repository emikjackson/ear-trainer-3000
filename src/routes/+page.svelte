<script>
  import Answers from './Answers.svelte';
  import NoteTesterMachine from './NoteTesterMachine.svelte';
  import QuizSidebar from './QuizSidebar.svelte';
</script>

<div class="outer-wrapper">
  <QuizSidebar />
  <div class="main-wrapper">
    <NoteTesterMachine />
    <Answers />
  </div>
</div>

<style>
  .outer-wrapper {
    display: flex;
    background-color: rgb(241, 230, 201);
  }
  .main-wrapper {
    padding: 20px;
    flex-grow: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
  }
</style>
