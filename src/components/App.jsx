export default function App() {
    const [token, setToken] = useState("");

    return (

        <BrowserRouter>
            <Reset />
            <GlobalStyle />
            <UserContext.Provider value={{ token, setToken }}>
                <ProductContext.Provider value={{ cart_list, setCart_list }}>
                    <Routes>
                        <Route path="/" element={<FeedScreen />} />
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/cart" element={<CartScreen />} />
                        <Route path="/product/:id" element={<ProductScreen />} />
                        <Route path="/purchases" element={<PurchasesScreen />} />
                        <Route path="/purchases/:id" element={<PurchaseScreen />} />
                    </Routes>
                </ProductContext.Provider>
            </UserContext.Provider>
        </BrowserRouter>
    )
}