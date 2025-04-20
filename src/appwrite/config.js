import conf from "../conf/conf"
import { Client,ID,Databases,Storage,Query } from "appwrite"



export class Service{

client = new Client();
Databases;
bucket;
constructor(){
    this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProject)
        this.Databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
}

async createPost({title,content,featureImage,status,userId}){
try {
    return await this.Databases.createDocument(
        conf.appwriteDatabase,
        conf.appwriteCollection,
        ID.unique(),
        {
            title,
            content,
            featureImage,
            status,
          userId
        }
    )
}
catch (error) {
    console.error("Error creating post:", error);
    throw error;}
}


async updatePost(slug,{title,content,featureImage,status}){

try {
    return await this.Databases.updateDocument(
       conf.appwriteDatabase,
         conf.appwriteCollection,
        slug,
        {
            title,
            content,
            featureImage,
         
            status
        } 
    )

} catch (error) {
    console.error("Error updating post:", error);
    throw error;
}


}

async deletePost(slug){
    try {
        return await this.Databases.deleteDocument(
            conf.appwriteDatabase,
            conf.appwriteCollection,
            slug
        )
    } catch (error) {
        console.error("Error deleting post:", error);
       return false ;
    }
}


async getPost(slug){
    try{ return await this.Databases.getDocument(
        conf.appwriteDatabase,
        conf.appwriteCollection,
        slug,
        
    )

    }
    catch (error) {
        console.error("Error getting post:", error);
      return false;
    }
}

async getPosts(queries=[Query.equal('status', 'active')]){
    try {
        return await this.Databases.listDocuments(
            conf.appwriteDatabase,
            conf.appwriteCollection,
            queries,
        )
    } catch (error) {
        console.error("Error getting posts:", error);
        return false;
    }

}

// file upload services

async uploadFile(file){
    try {
        return await this.bucket.createFile(
            conf.appwirteBucket,
            ID.unique(),
            file,
        )
        
    } catch (error) {
        console.error("Error uploading file:", error);
        return false;
    }
}

async deleteFile(fileId){
    try {
        return await this.bucket.deleteFile(
            conf.appwirteBucket,
            fileId,
        )
        
    } catch (error) {
        console.error("Error deleting file:", error);
        return false;
    }



}

getFilePreview(fileId){
    try {
        return this.bucket.getFilePreview(
            conf.appwirteBucket,
            fileId,
        )
        
    } catch (error) {
        console.error("Error getting file preview:", error);
        return false;
    }


}
}
const service = new Service();

export default service;




