import { ProductList } from '@/components';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom'

const CategoryDetail = () => {
    const { id } = useParams();
    const { data, isLoading } = useQuery({
        queryKey: ["PRODUCT_DETAIL", id],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:8080/api/cate/${id}`);
            return data;
        }
    })
    if (isLoading) return <p>Loading...</p>
    return (
        <div>
            <section className='news'>
                <div className='container'>
                    <div className='section-heading'>
                        <h2 className='section-heading__title'>Danh mục : {data.category.name}</h2>
                    </div>
                    <ProductList data={data.products} />
                </div>
            </section>
        </div>

    )
}

export default CategoryDetail