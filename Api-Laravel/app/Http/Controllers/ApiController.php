<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Contato;

class ApiController extends Controller
{
    private static $token = "estagio";

    public function tcontatos(Request $request){
        if($request->token == ApiController::$token){
            try{
                return json_encode(Contato::all());      
            }catch(Exception $e){
                return 0;
            }
              
        }
    }
    
    public function econtatos(Request $request){
        
        /*request
            tipo = {id=1, nome=2, ende=3, tel=4} <string>
            argumento = <string>
        */
        
        if($request->token == ApiController::$token){
            switch($request->tipo){
                case 1:
                    try{
                        return json_encode(Contato::where("id",'=',$request->argumento)->get());
                    }catch(Exception $e){
                        return 0;
                    }
                    break;
                case 2:
                    try{
                        return json_encode(Contato::where("nome",'=',$request->argumento)->get());
                    }catch(Exception $e){
                        return 0;
                    }
                    break;
                case 3:
                    try{
                        return json_encode(Contato::where("ende",'=',$request->argumento)->get());
                    }catch(Exception $e){
                        return 0;
                    }
                    break;
                case 4:
                    try{
                        return json_encode(Contato::where("tel",'=',$request->argumento)->get());
                    }catch(Exception $e){
                        return 0;
                    }
                    break;
            }
        }
    }
    
    public function addcontatos(Request $request){
        
        /*request
            nome=  <string>
            endereco=  <string>
            telefone= <string>
        */
        
        if($request->token == ApiController::$token){
            try{
                $contato = new Contato;
                $contato->nome = $request->nome;
                $contato->ende = $request->endereco;
                $contato->tel = $request->telefone;
                $contato->save();
                
                return 1;
            }catch(Exception $e){
                return 0;    
            }   
        }
    }
    
    public function removecontato(Request $request){
        
        /*request
            tipo = {id=1, nome=2, ende=3, tel=4} <string>
            argumento = <string>
        */
        if($request->token == ApiController::$token){
            switch($request->tipo){
                case 1:
                    try{
                        Contato::where("id",'=',$request->argumento)->delete();
                        return 1;
                    }catch(Exception $e){
                        return 0;
                    }
                    break;
                case 2:
                    try{
                        Contato::where("nome",'=',$request->argumento)->delete();
                        return 1;
                    }catch(Exception $e){
                        return 0;
                    }
                    break;
                case 3:
                    try{
                        Contato::where("ende",'=',$request->argumento)->delete();
                        return 1;
                    }catch(Exception $e){
                        return 0;
                    }
                    break;
                case 4:
                    try{
                        Contato::where("tel",'=',$request->argumento)->delete();
                        return 1;
                    }catch(Exception $e){
                        return 0;
                    }
                    break;
            }
        }
    }
    public function alteracontato(Request $request){
        if($request->token == ApiController::$token){
            try{
                Contato::where('id','=',$request->id)->update(['nome' => $request->nome,'ende' => $request->endereco, 'tel' => $request->telefone]);
                return 1;
            }catch(Exception $e){
                return 0;
            }
        }
    }
}
