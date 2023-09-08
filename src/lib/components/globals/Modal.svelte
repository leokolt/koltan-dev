<script>
    import { scale } from 'svelte/transition';

    export let showModal; // boolean
    let dialog; // HTMLDialogElement
    $: if (dialog && showModal) dialog.showModal();

</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
    transition:scale={{ duration: 500, delay: 500, opacity: 0.5, start: 0.5}}
>
    <!-- svelte-ignore a11y-autofocus -->
    <button class="dialog-close" autofocus on:click={() => dialog.close()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24"><g clip-path="url(#a)"><path stroke="#292929" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m7 7 10 10M7 17 17 7"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></svg>
    </button>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation>
        <slot />
	</div>
</dialog>

<style>
	dialog {
        max-width: 32rem;
        border-radius: var(--radius);
        border: none;
        padding: 0;
        margin: auto 15px;
        overflow: visible;
        background: var(--color-bg);
	}
	dialog::backdrop {
	    background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
	}
	/* dialog > div {
		padding: var(--unit-2);
	} */
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	button {
		display: block;
	}

    .dialog-close {
        position: absolute;
        background: var(--color-accent);
        line-height: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: var(--radius);
        cursor: pointer;
        top: -3rem;
        left: 50%;
        /* right: unset;
        width: calc(2.5 * var(--unit-3));
        height: calc(2.5 * var(--unit-3)); */
        transform: translateX(-50%);
    }

    .dialog-close svg {
        width: var(--h2);
        height: var(--h2);
    }



    @media(min-width: 992px) {
        dialog {
            margin: auto;
        }

        /* .dialog-close {
            right: calc(-1 * var(--unit-2));
            top: calc(-1 * var(--unit));
            left: unset;
            width: calc(1.5 * var(--unit-3));
            height: calc(1.5 * var(--unit-3));

        }*/
    }
</style>
