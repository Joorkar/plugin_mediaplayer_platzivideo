class Singleton {
    private static instace: Singleton
    
    private constructor() {
        // init
    }

    static getInstance() {
        if (!Singleton.instace) {
            Singleton.instace = new Singleton()
        }

        return Singleton.instace
    }
}

export default Singleton