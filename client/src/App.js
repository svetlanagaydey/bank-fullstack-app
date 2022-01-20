import myApi from './api/Api';

function App() {
  
  //console.log(process.env.NODE_ENV);

  const getReq = async () => {
    const { data } = await myApi.get('/users');
    console.log(data);
  };
  return (
    <div >
      {' '}
      Hello World!
      <button onClick={getReq}>get</button>
    </div>
  );
}

export default App;