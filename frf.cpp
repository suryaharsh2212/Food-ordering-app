#include<iostream>
using namespace std;
int main(){
    int n;
    cout<<"enter the value of n:";
    cin>>n;
    int i=1;

    while(i<=n){
        int space=i-1;
           while(space>=0){
            cout<<" ";
            space=space-1;
           }
    
           
        int j=1;
         
        while(j<=n){
            char start=n-i+1;
            while(start){
            cout<<"x";
            }
          
            
            j=j+1;
        }
        
    
    cout<<endl;
    i=i+1;
    }
    return 0;
}
