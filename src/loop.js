const loop = ( hd = () => {} ) => {
    let startTime = performance.now()
    function render() {
        requestAnimationFrame(( time ) => {
            if ( time - startTime > 10 ) {
                startTime = performance.now()
                hd()
            }
            requestAnimationFrame(render)
        })
    }
    render()
}

export { loop }