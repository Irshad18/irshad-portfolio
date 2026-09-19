/**
 * Vercel Serverless Function: /api/config
 * 
 * Securely exposes ONLY the public Supabase URL and public Anonymous Client Key
 * configured in Vercel Environment Variables to the client-side Career OS application.
 * 
 * NEVER exposes service_role, secret key, or database passwords.
 */

export default function handler(req, res) {
    if (req.method !== 'GET') {
        res.setHeader('Allow', ['GET']);
        return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }

    // Cache on CDN for up to 1 hour, stale-while-revalidate for fast subsequent loads
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');

    const supabaseUrl = (
        process.env.SUPABASE_URL ||
        process.env.NEXT_PUBLIC_SUPABASE_URL ||
        process.env.VITE_SUPABASE_URL ||
        ''
    ).trim();

    const supabaseAnonKey = (
        process.env.SUPABASE_ANON_KEY ||
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
        process.env.VITE_SUPABASE_ANON_KEY ||
        ''
    ).trim();

    return res.status(200).json({
        supabaseUrl,
        supabaseAnonKey
    });
}
