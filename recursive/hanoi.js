function hanoi(n, a, b, c) {
    if (n == 0) {
        return
    }

    hanoi(n - 1, a, c, b)
    console.log(`move ${n} from ${a} to ${c}`)
    hanoi(n - 1, b, a, c)
}

hanoi(3, 'a', 'b', 'c')