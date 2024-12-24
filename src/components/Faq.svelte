<script lang="ts">
  import { slide } from "svelte/transition";
  export let question: string;
  export let defaultOpen = false;
  let open = defaultOpen;
</script>

<div class="max-w-[945px] w-full mx-auto flex gap-12">
  <div><img src="/images/q.svg" alt="Question" /></div>
  <div class="flex-1 pt-4">
    <button on:click={() => (open = !open)} class="block w-full text-left">
      <h3 class="font-display text-3xl font-medium leading-none mb-3 text-left">
        {question}
      </h3>
    </button>
    {#if open}
      <div transition:slide><slot /></div>
    {/if}
  </div>
</div>
