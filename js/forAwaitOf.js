// https://github.com/vercel/vercel/blob/3ff777b8ede7ab9a76c5b9ccfcb0e2799ca21957/packages/cli/src/util/deploy/process-deployment.ts
async function main() {
    for await (const event of createSomething()) {
        console.log(event);
    }
}

async function* createSomething() {
    yield 'createSomething-1';
    yield 'createSomething-2';
    for await (const event of createOtherStuff()) {
        yield event;
    }
    yield 'event-done';
}

async function* createOtherStuff() {
    yield 'createOtherStuff-1';
    yield 'createOtherStuff-2';
    yield 'createOtherStuff-done';
}

main();
