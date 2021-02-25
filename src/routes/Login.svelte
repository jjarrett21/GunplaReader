<script>
  import Button from '../components/Button.svelte';

  let email = null;
  let password = null;

  let handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return;
    }
    console.log('logged in');

    //add login
  };
</script>

<svelte:head>
  <title>Gunpla Reader</title>
</svelte:head>

<div
  class="w-screen h-screen py-5 sm:px-2 flex flex col justify-start relative h-32 w-32"
>
  <form on:submit={handleSubmit} class="md:w-1/4 w-5/6">
    <div class="w-full mb-6">
      <label for="email" class="cursor-pointer py-2">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="you@email.com"
        required
        bind:value={email}
        class="w-full px-2 py-1 rounded-sm text-black"
      />
    </div>
    <div class="w-full mb-6">
      <label for="password" class="cursor-pointer py-2">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        required
        bind:value={password}
        class="w-full px-2 py-1 roudned-sm text-black"
      />
    </div>
    <div class="w-full">
      <Button type="submit" className="inline-flew w-full justify-center"
        >Login</Button
      >
    </div>
  </form>
</div>
