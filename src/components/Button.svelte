<script>
  export let type = 'button';
  export let className = '';
  export let disabled = false;
</script>

<button
  on:click
  {type}
  class={`text-white disabled:opacity-50 disabled:text-white bg-red py-2 px-2 rounded border-transparent ${
    disabled ? 'cursor-not-allowed' : ''
  } ${className}`}
  {disabled}><slot /></button
>
