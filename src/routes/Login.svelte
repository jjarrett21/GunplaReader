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
<!-- Container css -->
<div class="flex justify-between items-stretch h-screen w-auto">
  <!-- Left window css -->
  <div class="flex items-center justify-center flex-grow w-1/2 h-screen">
    <form on:submit={handleSubmit} class="w-1/2">
      <div class="">
        <img
          class="mx-auto mb-4 h-14 w-auto "
          src="/gunplaicon.png"
          alt="Gunpla Reader Logo"
        />
      </div>

      <div class="w-full mb-4">
        <label for="email" class="cursor-pointer py-2">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@email.com"
          required
          bind:value={email}
          class="w-full h-12 px-2 py-1 rounded-sm text-black"
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
          class="w-full h-12 px-2 py-1 roudned-sm text-black"
        />
      </div>
      <div class="w-full">
        <Button type="submit" className="inline-flew w-full justify-center h-12"
          >Login</Button
        >
      </div>
    </form>
  </div>
  <!-- Right window css -->
  <div
    class="right flex-grow w-1/2 bg-center bg-no-repeat bg-cover"
    style="background-image:url('/27.jpg')"
  />
</div>

<style>
  .right {
    position: relative;
  }
  .right::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
  }
</style>
